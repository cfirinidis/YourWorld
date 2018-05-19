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

import { StackNavigator } from 'react-navigation'
import Places from './Places';
import Home from './Home';

///this is WIP and has not been connected yet.

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


export default class CreatePlace extends React.Component {

	constructor(props){
		super(props);
		//This state initializes a placename for the location that the user will create. The latitude and longitude 
		// state variables are based on the current user latitude and longitude. userLatitude and userLongitude are 
		// outputted to the screen and are used for testing.
		this.state =  {
			placename:'',
			mapRegion: null,
			lastLat: 0,
			lastLong: 0,
			userLatitude: 0,
			userLongitude: 0,
		}
	}

	componentDidMount(){ //checks is user is logged in
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
		console.log(value);
	 	//if(value !== null){
	 	//	this.props.navigation.navigate('Home');
	 	//}
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
	//This method navigates to the home page(home.js)
	homePage = () => {
		this.props.navigation.navigate('Home');
	}

	Create = () => {
		console.log('\n\ncreating location\n');
		console.log('placename in lowercase ' + this.state.placename.toLowerCase());
		

		fetch('https://peaceful-woodland-41811.herokuapp.com/user/Place', {// sync IP address to expo application
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				//we set the placename in the JSON data to lower to ensure that there's no other usernames with the name
				//letters(regardless of having different upper or lower case letters)
				placename: this.state.placename.toLowerCase(),
				lat: roundTo(this.state.lastLat, 3), // rounds the latitude to 3 
			 	long: roundTo(this.state.lastLong, 3), // rounds the longitude to 3
			})
		})

		.then((response)=> response.json())
		.then ((res) => {

			if(res.success === true){
				console.log(value+this.state.hobby+this.state.age);
				//AsyncStorage.setItem('user', res.user);
				this.props.navigation.navigate('Home');
				alert("Location created and saved.");
			}
			else{
				console.log(res.message);
			}
		})
		.done();
	}

	render() {
		return(
			<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

			<View style={styles.container}>

				<Text style={styles.header}>Create Place</Text>

				<TextInput
					style={styles.textInput} placeholder='Place Name'
					onChangeText={ (placename)=> this.setState({placename}) }
					underlineColorAndroid= 'transparent'
					/>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.Create}>
					<Text>SAVE </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.homePage}>
					<Text>Home Page {/* Button that we have for now */}</Text>
				</TouchableOpacity>
					
			</View>

			</KeyboardAvoidingView>
		);
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
	SignUp: {
		//fontSize: 18,
		marginTop: 60,
		//color: '#fff',
		//fontWeight: 'bold',
		},
});		
