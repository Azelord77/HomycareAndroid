import React, { Component } from 'react';
import {View,Text, TouchableOpacity} from 'react-native';

import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.dispatch(StackActions.replace('Login'));
        },1000);
    }


    render() {
        return (
            <View>
                <Text style={{fontSize:100}}>Splash Screen</Text>
            </View>
        );
    }
}

export default SplashScreen;