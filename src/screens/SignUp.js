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

class SignUp extends Component {
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
    namaLengkap: '',
    nomorTelepon: '',
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
        <View style={styles.logohomy}>
          <LogoHomy />
        </View>
        <Text style={styles.nameHead}>Nama Lengkap</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Masukan Nama Lengkap"
            placeholderTextColor="#A9A9A9"
            onChangeText={text => this.setState({namaLengkap: text})}
          />
        </View>
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
        <Text style={styles.nameHead}>Nomor Telepon</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="+62"
            placeholderTextColor="#A9A9A9"
            onChangeText={text => this.setState({nomorTelepon: text})}
          />
        </View>
        <View>
          <Text>Saya setuju dengan ketentuan yang berlaku</Text>
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.loginText}> Daftar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameHead: {
    color: '#000',
    lineHeight: 36,
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logohomy: {
    height: 155,
    width: 153,
    left: 1,
    top: 1,
    borderRadius: 0,
    blend: 'passthrough',
    paddingBottom: 200,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#49b4f3',
    marginBottom: 40,
  },
  inputView: {
    width: 335,
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 42,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000',
  },
  loginText: {
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  SignupText: {
    color: '#a9a9a9',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  forgot: {
    color: '#a9a9a9',
    justifyContent: 'center',
    fontSize: 11,
    textAlign: 'center',
  },
  loginBtn: {
    width: 335,
    height: 35,
    backgroundColor: '#00ADFF',
    borderRadius: 30, //lengkungan
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SignUp;
