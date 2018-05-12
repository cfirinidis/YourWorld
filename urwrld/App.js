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
import Checkin from './app/components/Checkin'
import Tutorial from './app/components/Tutorial'
import Home from './app/components/Home'
import Loading from './app/components/Loading'

//Note: we changed Home: {screen: Login} to Login: { screen: Login}
const Application = StackNavigator({
  /*  Tutorial: {screen: Tutorial},    testing if Map.js works   */
  Login: { screen: Login },
  Home: { screen: Home},
  Profile: { screen: Profile },
  SignUp: {screen: SignUp},
  Congrats: {screen: Congrats},
  Checkin: {screen: Checkin},
  Maps: {screen: Maps},
  Friends: {screen: Friends},
  Places: {screen: Places},
  Loading: {screen: Loading},

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