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
import Login from './Login';
import SignUp from './SignUp';

export default class Congrats extends React.Component {

	render() {
		return(
		<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

			<View style={styles.container}>

				<Text style={styles.header}> 'Congratulations! ' </Text>

				<TouchableOpacity
					style={styles.Congrats}
					onPress={this.Profile}>
					<Text> "Continue to Profile" </Text>
				</TouchableOpacity>

			</View>
			</KeyboardAvoidingView>

		);
	}


Profile = () => {
		this.props.navigation.navigate('Profile');
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