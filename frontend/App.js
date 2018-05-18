import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import SignUp from './app/components/SignUp';
import Places from './app/components/Places'
import Checkin from './app/components/Checkin'
import Home from './app/components/Home'
import CreatePlace from './app/components/CreatePlace'

//Note: we changed Home: {screen: Login} to Login: { screen: Login}
const Application = StackNavigator({
  /*  Tutorial: {screen: Tutorial},    testing if Map.js works   */
  Login: { screen: Login },
  Home: { screen: Home},
  Profile: { screen: Profile },
  SignUp: {screen: SignUp},
  Checkin: {screen: Checkin},
  Places: {screen: Places},
  CreatePlace: {screen: CreatePlace},
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
