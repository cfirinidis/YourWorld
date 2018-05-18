import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';
import { Marker } from 'react-native' ;

export default class Tutorial extends React.Component {
    render() {
        return (
            /*
            <MapView style={styles.map}
            region={{
                latitude: 40.7831,
                longitude: 73.9712,
                latitudeDelta: 0.0,
                longitudeDelta: 0.0,
            }}
          >
          <MapView.Marker
              coordinate={{latitude: 40.7685,
              longitude: 73.9646}}
              title={"Hunter College"}
              description={"School"}
           />
        </MapView>
        */
       <MapView style={styles.map}
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 37.78825,
            longitude: -122.4324}}
            annotations={markers}
            /*
            title={"Hunter College"}
            description={"School"}
            annotations
            */
         />
      </MapView>
        );
    }
}

var markers = [
    {
        /*
      latitude: 40.7685,
      longitude: 73.9646,
      */
      latitude: 37.78825,
      longitude: -122.4324,
      title: 'Hunter College',
      subtitle: 'School'
    }
  ];

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        map: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }      
    });