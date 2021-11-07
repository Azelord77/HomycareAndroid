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
import LogoHomy from '../../assets/images/568800754.svg';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
// const Bg = {uri : '../../assets/images/images2.jpg'};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  backAction = () => {
    Alert.alert('Perhatian', 'APakah yakin ditutup apk', [
      {
        text: 'cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'yes',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };
  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }
  componentWillUnmount() {
    this.BackHandler.remove();
  }
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground source={Bg}></ImageBackground> */}
        {/* <View><Text>Login</Text>
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
					<Text>Masuk</Text>
					</TouchableOpacity>
				</View> */}
        <LogoHomy />
        <Text style={styles.nameHead}>Email</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Masukan Email"
            placeholderTextColor="#A9A9A9"
            onChangeText={text => this.setState({email: text})}
          />
        </View>
        <Text style={styles.nameHead}>Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Masukan Password"
            secureTextEntry
            placeholderTextColor="#A9A9A9"
            onChangeText={text => this.setState({Password: text})}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Forgot')}>
          <Text style={styles.forgot}> Lupa Password? </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}> LOGIN </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text>
            Belum punya akun?
            <Text style={styles.loginText}>&nbsp;Daftar Disini</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameHead: {
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logohomy: {
    height: '155px',
    width: '153px',
    left: '111px',
    top: '139px',
    borderRadius: 0,
    blend: 'passthrough',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#49b4f3',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000',
  },
  loginText: {
    color: '#000',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  forgot: {
    color: '#000000',
    justifyContent: 'center',
    fontSize: 11,
    textAlign: 'center',
  },
  loginBtn: {
    width: '80%',
    height: 50,
    backgroundColor: '#00ADFF',
    borderRadius: 30, //lengkungan
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Login;
