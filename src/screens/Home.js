import React, {Component} from 'react';
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
  ImageBackground,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>Home</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Halaman Utama</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Account')}>
          <Text>Akun</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('History')}>
          <Text>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HelpCenter')}>
          <Text>Pusat Bantuan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
