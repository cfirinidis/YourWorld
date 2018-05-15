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

export default class Profile extends React.Component {

	constructor(props){
		super(props);
		this.state =  {
			value:'',
			hobby: '',
			age: '',
		}
	}

<<<<<<< HEAD:frontend/app/components/Profile.js
	componentDidMount(){ //checks is user is logged in
	 	this._loadInitialState().done();
	}
	_loadInitialState = async ()=> {

		value = await AsyncStorage.getItem('user');
		console.log(value);
	 	//if(value !== null){
	 	//	this.props.navigation.navigate('Home');
	 	//}
	}

	homePage = () => {
		this.props.navigation.navigate('Home');
	}
=======
	// componentDidMount(){ //checks is user is logged in
	// 	this._loadInitialState().done();
	// }
	// _loadInitialState = async ()=> {

	// 	var value = await AsyncStorage.getItem('user');
	// 	if(value !== null){
	// 		this.props.navigation.navigate('Profile');
	// 	}
	// }
>>>>>>> a225f1e994ac2fccd313b74e57b006787751187b:urwrld/app/components/Profile.js

	save = () => {

		fetch('https://peaceful-woodland-41811.herokuapp.com/user/Profile', {// sync IP address to expo application
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: value,
				hobby: this.state.hobby,
				age: this.state.age,
			})
		})

		.then((response)=> response.json())
		.then ((res) => {

			if(res.success === true){
				console.log(value+this.state.hobby+this.state.age);
				//AsyncStorage.setItem('user', res.user);
				this.props.navigation.navigate('Home');
				alert("Profile saved.");
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

				<Text style={styles.header}>Profile</Text>

				<TextInput
					style={styles.textInput} placeholder='Hobby'
					onChangeText={ (hobby)=> this.setState({hobby}) }
					underlineColorAndroid= 'transparent'
					/>

				<TextInput
					style={styles.textInput} placeholder='Age'
					onChangeText={ (age)=> this.setState({age}) }
					underlineColorAndroid= 'transparent'
					/>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.save}>
					<Text>SAVE </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
<<<<<<< HEAD:frontend/app/components/Profile.js
					onPress={this.homePage}>
					<Text>Home Page {/* Button that we have for now */}</Text>
=======
					onPress={this.friendsList}>
					<Text>Go To Friends List </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					onPress={this.parkPlaces}>
					<Text>View Park Places</Text>
>>>>>>> a225f1e994ac2fccd313b74e57b006787751187b:urwrld/app/components/Profile.js
				</TouchableOpacity>
					
			</View>

			</KeyboardAvoidingView>
		);
	}
<<<<<<< HEAD:frontend/app/components/Profile.js
=======

	save = () => {

		fetch('http://192.168.13.14:3000/users', {// sync IP address to expo application
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
			})
		})

		.then((response)=> response.json())
		.then ((res) => {

			if(res.success === true){
				AsyncStorage.setItem('user', res.user);
				this.props.navigation.navigate('Profile');
			}
			else{
				alert(res.message);
			}
		})
		.done();
	}

	friendsList = () => {
		this.props.navigation.navigate('Friends');
	}

	parkPlaces = () => {
		this.props.navigation.navigate('Places');
	}
>>>>>>> a225f1e994ac2fccd313b74e57b006787751187b:urwrld/app/components/Profile.js
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#8be5e1',
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
