import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	AsyncStorage,
	Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class SignUp extends React.Component {

constructor(props){
		super(props);
		this.state =  {
			username: '',
			password: '',
			email: '',
		}
	}


	render() {
		return(

		<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
	
			<View style={styles.container}>

				<Image
					style={{alignSelf: 'center', height: 150, width: 150, borderWidth: 1,
						borderRadius: 75, backgroundColor: '#dc6900'}}
					source={require('../../img/urwrld_logo.jpg')}
					resizeMode="cover"
				/>
				<Text style={styles.header}> urwrld Signup </Text>
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

				<TextInput
					style={styles.textInput} placeholder='Email'
					onChangeText={ (email)=> this.setState({email}) }
					underlineColorAndroid= 'transparent'
					/>

					<TouchableOpacity
					style={styles.btn}
					onPress={this.UserRegistrationFunction}>
					<Text>SIGN UP </Text>
				</TouchableOpacity>

			</View>

		</KeyboardAvoidingView>
		);
	}


UserRegistrationFunction = () => {
		const { username } = this.state ;
		const { password } = this.state ;
		const { email } = this.state ;

	if(username.length<4||username.length>10){
		alert("username must be between 4 and 10 characters");
	}else if(password.length != 6){
		alert("Password must be 6 characters.");
	}else if(!validateEmail(email)){
		alert("Not valid email");
	}else{
		fetch('https://peaceful-woodland-41811.herokuapp.com/api/SignUp', { // sync IP address to expo application
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
				email: this.state.email,
			})
		})

		.then ((response) => response.json())
		.then ((res) => {
			if(res.success === true){
				AsyncStorage.setItem('user', this.state.username);
				this.props.navigation.navigate('Home');
				alert("Welcome!");
			}
			else{
				alert(res.message);
			}
		})
		.done();
	}//end of else
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
		padding: 7,
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
