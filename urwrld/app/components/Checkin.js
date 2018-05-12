import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
  Dimensions,
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView, {Callout, Circle, Marker, Polygon} from 'react-native-maps'

import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import Maps from './Maps'; //We will use it as a component.

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0008;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

//From parent component 
// <Maps region={this.state.region} getCurrentPosistion={this.getCurrentPosition} />

//Parent should have a function called checkin that you pass into the map
export default class Checkin extends React.Component {
    constructor() {
        super();
        //Pass entire state up to parent component
        this.state = {
          region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          markers: [ {latitude: 40.629718, longitude: -73.900231},/* {latitude: region.latitude, longitude: region.longitude} */], 
          inPolygon: false,
        };
    }
    //The accessCurrent position function will take in no parameters and  
    // will call the navigator.geolocation.getCurrentPosition function
    accessCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
              this.setState({
                region: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                },
      
              });
              let pointXCoordinate = position.coords.latitude;
              let pointYCoordinate = position.coords.longitude;
      
              console.log('Heres the user location x coordinate: ' + pointXCoordinate);
              console.log('Heres the user location y coordinate: ' + pointYCoordinate);
            },
          (error) => console.log(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
    }

    //Before we render, we just clear out the watchID variable
  //Make a function called _clearWatchID(theWatchId):
  //*Note: I can pass in this.watchID as a prop by doing: watchID = this.watchID
  //Call inside the ComponentWillUnmount function
  /*
    _clearWatchID() = (this.props.watchID)
  */

    //Note: Be careful with the names of the parametrs
  _clearWatchID = (theWatchId) => {
    navigator.geolocation.clearWatch(this.watchID);
  }
  

    //This function is called in componentDidMount

    _isInPolygon = (pointXCoordinate, pointYCoordinate) => {
 

        console.log('Heres the user location x coordinate: ' + pointXCoordinate);
        console.log('Heres the user location y coordinate: ' + pointYCoordinate);
    
        //Euclidean algorithm(from pythagorean's theorem)
        var xAxisDistance = Math.pow((40.7685 - pointXCoordinate), 2);
        console.log('Heres x axis distance: ' + xAxisDistance);
        var yAxisDistance = Math.pow((-73.9646 - pointYCoordinate), 2);
        console.log('Heres y axis distance: ' + yAxisDistance);
        var sumOfDistance = xAxisDistance + yAxisDistance;
        console.log('Heres the sum of distance formula: ' + sumOfDistance + '\n');
       
    
        //Next we calculate the size of hunter college(center - edge): center(40.768587, -73.964685)
        //  Side of Hunter College: 40.768778, -73.965217
    
    
        var xCoordinateHunterCollege = Math.pow((40.768587 - 40.768778), 2);
        console.log('Heres x coordinate of Hunter College: ' + xCoordinateHunterCollege);
        var yCoordinateHunterCollege = Math.pow((-73.964685 - -73.965217), 2);
        console.log('Heres y coordinate of Hunter College: ' + yCoordinateHunterCollege);
        var sumOfDistanceHunterCollege = xCoordinateHunterCollege + yCoordinateHunterCollege;
        
        console.log('Heres the sum of distance Hunter College formula: ' + sumOfDistanceHunterCollege + '\n');
        if(sumOfDistance < sumOfDistance){
          return true;
        }else{
          return false;
        }
      }
    
      render() {
        return (
            <View style={styles.container}>
              {/* <Maps region= {this.state.region} watchID = {this.watchID} 
              accessCurrentPosition = {this.accessCurrentPosition} 
             _clearWatchPosition = {this._clearWatchPosition} _isInPolygon = {this._isInPolygon}

            /> */}

            </View>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
          flex: 1,
    },
    radius: {
      height: 50,
      width: 50,
      borderRadius: 50, 
      borderRadius: 50 / 2,
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 122, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(0, 112, 255, 0.3)',
      alignItems: 'center',
      justifyContent: 'center'
    },
    marker: {
      height: 20,
      width: 20, 
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 20 / 2,
      overflow: 'hidden',
      backgroundColor: '#007AFF'
    },
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
    },
    map: {
      position: 'absolute',
      top: 10,
      left: 0,
      right: 0,
    //  botttom: 0
    } 
  });
  