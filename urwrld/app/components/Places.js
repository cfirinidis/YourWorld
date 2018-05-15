import React from 'react';
import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Places extends React.Component {
    //Not sure if needed
    static navigationOptions = {
        title: 'Maps',
    };
    
    render(){
        return(
            <KeyboardAvoidingView behavior = 'padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>Friends List </Text>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.Back}>
                        <Text>Back to Profile page </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.Maps}>
                        <Text>Go to Maps </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        )
    }
    Back = () => {
        this.props.navigation.navigate('Profile');
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
});	