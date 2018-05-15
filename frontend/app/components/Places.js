import React from 'react';
import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage,} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Profile from './Profile';
import Home from './Home';

export default class Places extends React.Component {
    //Not sure if needed
    static navigationOptions = {
        title: 'Place',
    };
  
    render(){
        return(
            <KeyboardAvoidingView behavior = 'padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>Location {/*Put location name   */}</Text> 
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.Profile}>
                        <Text>Back to Profile </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                         onPress={this.viewUsers}>  
                        <Text>View Users at Location {/*Add functionality for checkout  */}</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.Checkout}>
                        <Text>Checkout of Location </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        )
    }
    Profile = () => {
        this.props.navigation.navigate('Home');
    }

   viewUsers = async () => {
    fetch('https://peaceful-woodland-41811.herokuapp.com/user/Viewplace', {// sync IP address to expo application
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				placename: await AsyncStorage.getItem('placename'),
			})
		})

		.then((response)=> response.json())
		.then (async (res) => {
			if(res.success === true){
				alert(res.user);
			}
			else{
				var ass=await AsyncStorage.getItem('placename');
				alert(ass);
			}
		})
		.done();
	}

   Checkout = async () => {
    fetch('https://peaceful-woodland-41811.herokuapp.com/home/CheckOut', {// sync IP address to expo application
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: await AsyncStorage.getItem('user'),
				placename: await AsyncStorage.getItem('placename'),
			})
		})

		.then((response)=> response.json())
		.then ((res) => {
			if(res.success === true){
				alert(res.message);
				this.Profile;
			}
			else{
				alert("error with checkout");
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
});	
