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

export default class Login extends React.Component {

	constructor(props){
		super(props);
		this.state =  {
			username: '',
			password: '',
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

				<Text style={styles.header}>urwrld</Text>

				<TextInput
					style={styles.textInput} placeholder='Username'
					onChangeText={ (username)=> this.setState({username}) }
					underlineColorAndroid= 'transparent'
					/>

				<TextInput
					style={styles.textInput} placeholder='Password'
					onChangeText={ (password)=> this.setState({password}) }
					secureTextEntry = { true } underlineColorAndroid= 'transparent'
					/>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.login}>
					<Text>LOGIN </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.SignUp}
					onPress={this.SignUp}>
					<Text> "Don't have an Account? SignUp!" </Text>
				</TouchableOpacity>
					
				</View>

			</KeyboardAvoidingView>
		);
	}

	SignUp = () => {
		this.props.navigation.navigate('SignUp');
	}
			
	login = () => {


		fetch('http://146.95.79.164:3000/users', {// sync IP address to expo application

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