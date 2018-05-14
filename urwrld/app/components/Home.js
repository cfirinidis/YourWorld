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
    n = (Math.round(n) / multiplicator).toFixed(2);
    if( negative ) {    
        n = (n * -1).toFixed(2);
    }
    return n;
}

//HOME Page
export default class Home extends React.Component {
	state = {
		mapRegion: null,
		lastLat: null,
		lastLong: null,
	  }
    //Not sure if needed
    static navigationOptions = {
            title: 'HOME',
		};
		
		// The button labeled Checkin goes to Loading.js(should we put something extra in Loading.js)
		componentDidMount() {
			this.watchID = navigator.geolocation.watchPosition((position) => {
			  // Create the object to update this.state.mapRegion through the onRegionChange function
			  let region = {
				latitude:       position.coords.latitude,
				longitude:      position.coords.longitude,
				latitudeDelta:  0.00922*1.5,
				longitudeDelta: 0.00421*1.5
			  }
			  var userLatitude = 0;
			  var userLongitude = 0;
			  this.onRegionChange(region, region.latitude, region.longitude);
			});
		  }
		
		  onRegionChange(region, lastLat, lastLong) {
			this.setState({
			  mapRegion: region,
			  // If there are no new values set use the the current ones
			  lastLat: lastLat || this.state.lastLat,
			  lastLong: lastLong || this.state.lastLong
			});
			
		   
			userLatitude = lastLat
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
			console.log("called getloc")
	   
		   fetch('https://peaceful-woodland-41811.herokuapp.com/home/Checkin', {// this is the checkin fetch
			 method: 'POST',
			 headers: {
			   'Accept': 'application/json',
			   'Content-Type': 'application/json',
			 },
			 body: JSON.stringify({
			   username: AsyncStorage.getItem('user'),
			   lat: this.state.lastLat,
			   lng: this.state.lastLong
			 })
		   })
	   
		   .then((response)=> response.json())
		   .then ((res) => {
	   
			 if(res.success === true){
			   AsyncStorage.setItem('placename', res.placename);
			 }
			 else{
			   alert(res.message);
			 }
		   })
		   .done();
		 }//end of getloc
	   
	   

		//   pressCheckin = () => {
		// 	const { latitude } = this.state ;
		// 	const { password } = this.state ;
		// 	const { email } = this.state ;
	

		
	
		// 	fetch('http://192.168.13.14:3000/SignUp', { // sync IP address to expo application
		// 		method: 'POST',
		// 		headers: {
		// 			'Accept': 'application/json',
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({
		// 			username: this.state.username,
		// 			password: this.state.password,
		// 			email: this.state.email,
		// 		})
		// 	})
	
		// 	.then ((response) => response.json())
		// 	.then ((res) => {
		// 		if(res.success === true){
		// 			this.props.navigation.navigate('Home');
		// 		}
		// 		else{
		// 			alert(res.message);
		// 		}
		// 	})
		// 	.done();
		// }
		
	render() {
		return(
		<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

			<View style={styles.container}>

				<Text style={styles.header}>Username {/*Note: we can add a default pic and get username from database*/}</Text>


				<TouchableOpacity
					style={styles.btn}
					onPress={this.Profile}>
                    			<Text> Edit Profile {/* Thi*/}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.getloc}>
					<Text> Checkin {/*  Profile.js}	*/}</Text>
				</TouchableOpacity>

			</View>
			</KeyboardAvoidingView>

		);
	}


Profile = () => {
		this.props.navigation.navigate('Profile');
	}
Loading = () => {
        this.props.navigation.navigate('Maps');
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
