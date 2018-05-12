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

// import Login from './Login';
// import SignUp from './SignUp';
import Profile from './Profile';
//import Checkin from './Checkin';
import Places from './Places';
import Maps from './Maps';
import Loading from './Loading';

//Welcome Page
export default class Home extends React.Component {
    //Not sure if needed
    static navigationOptions = {
            title: 'Profile',
        };
        // The button labeled Checkin goes to Loading.js(should we put something extra in Loading.js)
	render() {
		return(
		<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

			<View style={styles.container}>

				<Text style={styles.header}>Username {/*Note: we can add a default pic and get username from database*/}</Text>


				<TouchableOpacity
					style={styles.btn}
					onPress={this.Profile}>
                    <Text> Edit Profile {/* This button goes to profile{this.Profile navigates to Profile.js}	*/}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={this.Loading}>
					<Text> Checkin {/* This button goes to profile{this.Profile navigates to Profile.js}	*/}</Text>
				</TouchableOpacity>

			</View>
			</KeyboardAvoidingView>

		);
	}


Profile = () => {
		this.props.navigation.navigate('Profile');
	}
    Loading = () => {
        this.props.navigation.navigate('Loading');
    }
}


// Place = () => {
//     this.props.navigation.navigate('Checkin');
// }

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