import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Profile from './Profile';
import Places from './Places';
import CreatePlace from './CreatePlace';

//The rounTo function takes in a number n as the first parameter and the number of digits as the second parameter.
function roundTo(n, digits) {
    var negative = false;
    if (digits === undefined) {
        digits = 0;
    }
    if( n < 0) {
        negative = true;
        n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(3);
    if( negative ) {    
        n = (n * -1).toFixed(3);
    }
    return n;
}

//HOME Page
export default class Home extends React.Component {

	constructor(props){
		super(props);
		this.state =  {
			mapRegion: null,
			lastLat: 0,
			lastLong: 0,
			userLatitude: 0,
			userLongitude: 0,
		  }
	};


    //Not sure if needed
    	static navigationOptions = {
            	title: 'HOME',
	};
		
		// The button labeled Checkin goes to Loading.js(should we put something extra in Loading.js)
	componentDidMount() {
 		this._loadInitialState().done();
		this.watchID = navigator.geolocation.watchPosition((position) => {
	// Create the object to update this.state.mapRegion through the onRegionChange function
		let region = {
			latitude:       position.coords.latitude,
			longitude:      position.coords.longitude,
			latitudeDelta:  0.00922*1.5,
			longitudeDelta: 0.00421*1.5
		  }
		  this.onRegionChange(region, region.latitude, region.longitude);
		});
	  }

	_loadInitialState = async ()=> {

		value = await AsyncStorage.getItem('user');
		placename = await AsyncStorage.getItem('placename');
	}
		
	onRegionChange(region, lastLat, lastLong) {
		this.setState({
		mapRegion: region,
		// If there are no new values set use the the current ones
			lastLat: lastLat || this.state.lastLat,
			lastLong: lastLong || this.state.lastLong
		});
			userLatitude = lastLat;
			userLongitude = lastLong;
		
			userLatitude = roundTo(userLatitude, 3);
			userLongitude = roundTo(userLongitude, 3);
			console.log('userLatitude rounded to 3 decimal places: ' + userLatitude);
			console.log('userLongitude rounded to 3 decimal places: ' + userLongitude);	
			
		}
		
	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}
	
	onMapPress(e) {
		console.log(e.nativeEvent.coordinate.longitude);
		let region = {
			latitude:       e.nativeEvent.coordinate.latitude,
			longitude:      e.nativeEvent.coordinate.longitude,
			latitudeDelta:  0.00922*1.5,
			longitudeDelta: 0.00421*1.5
		}
		this.onRegionChange(region, region.latitude, region.longitude);
		}
	getloc = () => {
	   	console.log(value+" "+roundTo(this.state.lastLat, 3) + " "+ roundTo(this.state.lastLong, 3)),
		fetch('https://peaceful-woodland-41811.herokuapp.com/home/Checkin', {// this is the checkin fetch
			 method: 'POST',
			 headers: {
			 	'Accept': 'application/json',
			 	'Content-Type': 'application/json',
			 },
			 body: JSON.stringify({
			 	username: value,
				 lat: roundTo(this.state.lastLat, 3), // we call the roundTo function to round the latitude to
										  // 3 decimal places
				 long: roundTo(this.state.lastLong, 3) // we call the roundTo function to round the longitude to 
				 										// 3 decimal places
			 })

		   })
	   
		.then( (response)=> response.json())
		.then (async (res) => {
	   
			if(res.success === true){
				await AsyncStorage.setItem('placename', res.message);
				alert("Checking in!");
			}
			else{
				alert("Error checking in. Maybe you're already checked in.");
			}
		})
		.done();
	}//end of getloc

	render() {
		return(
		<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

			<View style={styles.container}>

				<Text style={styles.header}>Home Page {}</Text>


				<TouchableOpacity
					style={styles.btn}
					onPress={this.Profile}>
                    <Text> Edit Profile {/* Thi*/}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.getloc.bind(this)}>
					<Text> Checkin {/*  Profile.js}	*/}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.viewLocation}>
					<Text> View Location {/*  Profile.js}	*/}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.createPlace}>
                	<Text> Create Place {/* Thi*/}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.Logout}>
                	<Text> Logout {/* Thi*/}</Text>
				</TouchableOpacity>


			</View>
			</KeyboardAvoidingView>

		);
	}

//This method is called by the onPress() for the Profile button
Profile = () => {
		this.props.navigation.navigate('Profile');
	}

	//This method is called by the onPress() for the logout button
Logout = async () => {
		await AsyncStorage.removeItem('username');
		await AsyncStorage.setItem('placename', "");
		this.props.navigation.navigate('Login');
	}

//The viewLocation method is called by the onPress() for the View Location button. 
viewLocation = async () =>{
	var location = await AsyncStorage.getItem('placename');
	if(location!=null){
		this.props.navigation.navigate('Places');

	}else{
		alert("Not currently checked into a location.");
	}
	}

	//This method is called by the onPress function for the Check In button
	createPlace = () => {
		this.props.navigation.navigate('CreatePlace');
	}

}



const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#dc6900',
		paddingLeft: 40,
		paddingRight: 40,
	},
	header: {
		fontSize: 24,
		marginBottom: 60,
		color: '#fff',
		fontWeight: 'bold',
	},
	textInput: {
		alignSelf: 'stretch',
		padding: 16,
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	btn: {
		alignSelf: 'stretch',
		backgroundColor: '#d4d8d4',
		padding:20,
		alignItems: 'center',
	},
	Congrats: {
		marginTop: 10,
		//color: '#fff',
		//fontWeight: 'bold',
		},
});		
