import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    Switch,
    TextInput,
    ScrollView,
    StyleSheet,
    Button,
    FlatList,
    Alert,
    ToastAndroid,
    BackHandler,
    PermissionsAndroid,
    ActivityIndicator,
    Dimensions,
    Linking,
    RefreshControl,
    ImageBackground
} from 'react-native';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>SignUp</Text>
                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Login')}>
                <Text > Back </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignUp;