import React from 'react';
import{
  Platform,
	StyleSheet,
	Text,
	View,
  Dimensions,
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps'
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import { Callout } from 'react-native-maps';
import { Marker } from 'react-native';
import _ from 'lodash';



let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0008;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Maps extends React.Component {

  constructor() {
    super();

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }

  getloc = () => {
     console.log("called getloc")

    fetch('http://146.95.78.169:3000/maploc', {// sync IP address to expo application
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lat: this.state.latitude,
        lng: this.state.longitude
      })
    })

    .then((response)=> response.json())
    .then ((res) => {

      if(res.success === true){
        //AsyncStorage.setItem('user', res.user);
       // this.props.navigation.navigate('Profile');
      }
      else{
        alert(res.message);
      }
    })
    .done();
  }//end of getloc



  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      position => {

        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
        this.setState({
          point : {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      //this.getloc()
    });
        this.getloc();

      console.log(this.state.point)
      },
  
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );// get current Position
  }//component did mount

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  
  render() {
    return (
      <MapView

        style = { styles.container }
        showsUserLocation = { true }
        region = { this.state.region }
        onRegionChange = { region => this.setState({region}) }
        onRegionChangeComplete = { region => this.setState({region}) }
      >
        <MapView.Marker
          coordinate={ this.state.region }
        />
         
       </MapView>
    );
  }//render



}// end of class




const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  }
});


AppRegistry.registerComponent('Maps', () => Maps);


  