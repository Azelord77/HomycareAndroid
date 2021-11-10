import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>Akun</Text>
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

export default Account;
