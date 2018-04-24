import React from 'react';
import{
	StyleSheet,
	Text,
	View,
} from 'react-native';
import MapView from 'react-native-maps'
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';

export default class Maps extends React.Component {

	render() {
		return(

			<View style={styles.container}>

				<Text style={styles.header}> "Map will go HERE" </Text>



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