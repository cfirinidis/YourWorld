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

export default class Profile extends React.Component {

	constructor(props){
		super(props);
		this.state =  {
			placename:'',
		}
	}

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

	Create = () => {

		fetch('https://peaceful-woodland-41811.herokuapp.com/user/Place', {// sync IP address to expo application
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
					style={styles.textInput} placeholder='Place Name'
					onChangeText={ (hobby)=> this.setState({hobby}) }
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
