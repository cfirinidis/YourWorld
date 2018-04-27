import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,

} from 'react-native';
import { StackNavigator } from 'react-navigation';


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

	

		fetch('http://146.95.79.164:3000/SignUp', { // sync IP address to expo application
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
				this.props.navigation.navigate('Congrats');
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