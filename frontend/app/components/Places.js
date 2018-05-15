import React from 'react';
import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Profile from './Profile';

export default class Places extends React.Component {
    //Not sure if needed
    static navigationOptions = {
<<<<<<< HEAD:urwrld/app/components/Places.js
        title: '',
    };

=======
        title: 'Place',
    };
>>>>>>> 20e932ce49f234488b9491ccfc68544e3f1c6430:frontend/app/components/Places.js
   
    render(){
        return(
            <KeyboardAvoidingView behavior = 'padding' style={styles.wrapper}>
                <View style={styles.container}>
<<<<<<< HEAD:urwrld/app/components/Places.js
                    <Text style={styles.header}>Location Name {/*Put location name   */}</Text> 
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.Profile}>
                        <Text>Back to Profile page </Text>
=======
                    <Text style={styles.header}>Location {/*Put location name   */}</Text> 
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.Profile}>
                        <Text>Back to Profile </Text>
>>>>>>> 20e932ce49f234488b9491ccfc68544e3f1c6430:frontend/app/components/Places.js
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                         onPress={this.Profile}>  
                        <Text>Checkout {/*Add functionality for checkout  */}</Text> 
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        )
    }
    Profile = () => {
        this.props.navigation.navigate('Home');
    }

<<<<<<< HEAD:urwrld/app/components/Places.js

     Checkout = () => {
    	fetch('https://peaceful-woodland-41811.herokuapp.com/home/CheckOut', {// sync IP address to expo application
=======
/*
    // Checkout = () => {
    //	fetch('https://peaceful-woodland-41811.herokuapp.com/user/Viewplace', {// sync IP address to expo application
>>>>>>> 20e932ce49f234488b9491ccfc68544e3f1c6430:frontend/app/components/Places.js
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: AsyncStorage.getItem('user'),
				placename: AsyncStorage.getItem('placename'),
			})
		})

		.then((response)=> response.json())
		.then ((res) => {

			if(res.success === true){
				AsyncStorage.setItem('user', res.user);
				this.props.navigation.navigate('Home'); //This is where we navigate to the welcome page
				// replace profile with Welcome

			}
			else{
				alert(res.message);
			}
		})
		.done();
	}
} 

<<<<<<< HEAD:urwrld/app/components/Places.js
=======
*/

}
>>>>>>> 20e932ce49f234488b9491ccfc68544e3f1c6430:frontend/app/components/Places.js

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
});	
