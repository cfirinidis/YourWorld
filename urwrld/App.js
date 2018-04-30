import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import SignUp from './app/components/SignUp';
import Congrats from './app/components/Congrats';
import Maps from './app/components/Maps';
import Friends from './app/components/Friends';
import Places from './app/components/Places'

const Application = StackNavigator({
  Home: { screen: Login },
  Profile: { screen: Profile },
  SignUp: {screen: SignUp},
  Congrats: {screen: Congrats},
  Maps: {screen: Maps},
  Friends: {screen: Friends},
  Places: {screen: Places}

  }, {
    navigationOptions: {
      header: false,
  }
  
});

export default class App extends React.Component {
    render() {
      return(
        <Application />
      );
    }
}