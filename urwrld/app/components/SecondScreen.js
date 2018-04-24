import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'First screen',
    };
    render() {
        var {navigate} = this.props.navigation;
        return(
            <View>
                <Text>This is screen 2</Text>
                <Button 
                    onPress={
                        () => navigate("First", {})
                    }
                    title = "Go to Screen2"
                />
            </View>
        );
    }
}
