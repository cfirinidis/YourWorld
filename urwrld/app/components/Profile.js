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
<<<<<<< HEAD
import { StackNavigator } from 'react-navigation'
=======
import Login from './Login';
import SignUp from './SignUp';
>>>>>>> c4a6818967c477f8d22db0b623dd4ff399e58504

export default class Profile extends React.Component {

	constructor(props){
		super(props);
		this.state =  {
			hobby: '',
			age: '',
		}
	}

	componentDidMount(){ //checks is user is logged in
		this._loadInitialState().done();
	}
	_loadInitialState = async ()=> {

		var value = await AsyncStorage.getItem('user');
		if(value !== null){
			this.props.navigation.navigate('Profile');
		}
	}


	render() {
		return(
			<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

			<View style={styles.container}>

<<<<<<< HEAD
				<Text style={styles.header}>urwrld</Text>

				<TextInput
					style={styles.textInput} placeholder='Hobby'
					onChangeText={ (hobby)=> this.setState({hobby}) }
					underlineColorAndroid= 'transparent'
					/>
=======
				<Text style={styles.header}> "Welcome to Profile Page" </Text>
>>>>>>> c4a6818967c477f8d22db0b623dd4ff399e58504

				<TextInput
					style={styles.textInput} placeholder='Age'
					onChangeText={ (age)=> this.setState({age}) }
					secureTextEntry = { true } underlineColorAndroid= 'transparent'
					/>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.save}>
					<Text>SAVE </Text>
				</TouchableOpacity>
					
				</View>

			</KeyboardAvoidingView>
		);
	}

<<<<<<< HEAD
	save = () => {

		fetch('http://146.95.77.44:3000/users', {// sync IP address to expo application
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
=======

>>>>>>> c4a6818967c477f8d22db0b623dd4ff399e58504
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
