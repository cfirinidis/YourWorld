import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	TextInput,
} from 'react-native';

export default class SignUp extends React.Component {

	render() {
		return(

			<View style={styles.container}>

				<Text style={styles.header}> Signup Page</Text>

				<TextInput
					style={styles.textInput} placeholder='EMAIL'
					onChangeText={ (username)=> this.setState({username}) }
					underlineColorAndroid= 'transparent'
					/>

				<TextInput
					style={styles.textInput} placeholder='Password'
					onChangeText={ (password)=> this.setState({password}) }
					secureTextEntry = { true } underlineColorAndroid= 'transparent'
					/>

				<TextInput
					style={styles.textInput} placeholder='Username'
					onChangeText={ (username)=> this.setState({username}) }
					underlineColorAndroid= 'transparent'
					/>


			</View>
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