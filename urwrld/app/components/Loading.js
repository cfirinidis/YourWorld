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

// import Login from './Login';
// import SignUp from './SignUp';
import Profile from './Profile';
import Checkin from './Checkin';
import Home from './Home';
import { StackNavigator } from 'react-navigation';
//Welcome Page
export default class Loading extends React.Component {

	render() {
		return(
		<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

			<View style={styles.container}>

				<Text style={styles.header}> Loading </Text>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.Home}>
					<Text> "Back To Profile" </Text>
				</TouchableOpacity>

			</View>
			</KeyboardAvoidingView>

		);
	}


Home = () => {
		this.props.navigation.navigate('Home');
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