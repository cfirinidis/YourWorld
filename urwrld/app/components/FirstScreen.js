import React from 'react';
import {Text, View, Button} from 'react-native';
import { isNullOrUndefined } from 'util';
const util = require('util');

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'First screen',
    };
    render() {
        console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
        var {navigate} = this.props.navigation;
        return(
            <View>
                <Text>This is screen 1</Text>
                <Button 
                    onPress={
                        () => navigate("Second", {})
                    }
                    title = "Go to Screen2"
                />
            </View>
        );
    }
}
