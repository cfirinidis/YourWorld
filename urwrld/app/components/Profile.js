import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import Login from './Login';
import SignUp from './SignUp';
import Maps from './Maps';

export default class Profile extends React.Component {

	render() {
		return(
			

			<View style={styles.container}>

				<Text style={styles.header}>
				  Welcome to Profile Page!</Text>

				<TouchableOpacity
					style={styles.Congrats}
					onPress={this.Maps}>
					<Text> "Check Map" </Text>
				</TouchableOpacity>


				</View>
		);
	}

	Maps = () => {
		this.props.navigation.navigate('Maps');
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