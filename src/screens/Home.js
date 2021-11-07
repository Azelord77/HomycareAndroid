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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Home</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Detail',{
                        umur : 18,
                        nama : 'BUDI',
                    })}>
                        <Text>Move to Detail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

export default Home;