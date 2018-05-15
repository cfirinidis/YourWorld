import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import SignUp from './app/components/SignUp';
<<<<<<< HEAD:frontend/App.js
import Places from './app/components/Places'
import Checkin from './app/components/Checkin'
import Home from './app/components/Home'

//Note: we changed Home: {screen: Login} to Login: { screen: Login}
=======
import Congrats from './app/components/Congrats';
import Maps from './app/components/Maps';
import Friends from './app/components/Friends';
import Places from './app/components/Places'

>>>>>>> a225f1e994ac2fccd313b74e57b006787751187b:urwrld/App.js
const Application = StackNavigator({
  /*  Tutorial: {screen: Tutorial},    testing if Map.js works   */
  Login: { screen: Login },
  Home: { screen: Home},
  Profile: { screen: Profile },
  SignUp: {screen: SignUp},
<<<<<<< HEAD:frontend/App.js
  Checkin: {screen: Checkin},
  Places: {screen: Places},
=======
  Congrats: {screen: Congrats},
  Maps: {screen: Maps},
  Friends: {screen: Friends},
  Places: {screen: Places}
>>>>>>> a225f1e994ac2fccd313b74e57b006787751187b:urwrld/App.js

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