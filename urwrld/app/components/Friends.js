import React from 'react';
import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Friends extends React.Component{

    // constructor(props){
    //     super(props); 
    //     this.state = {
    //         username: ''
    //     }
    //Not sure if needed:
    static navigationOptions = {
		title: 'Profile',
	};
        render(){
            return(
                <KeyboardAvoidingView behavior = 'padding' style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={styles.header}>  Friends List      </Text>
                        <TouchableOpacity
					        style={styles.btn}
					        onPress={this.Back}>
					        <Text>Back to Profile page </Text>
				        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

            )
        }
        Back = () => {
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
    });	

    
