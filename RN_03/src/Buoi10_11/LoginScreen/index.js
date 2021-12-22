import axios from 'axios';
import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonIcon, Text, TextInput} from '../components';
import {fontIcon} from '../components/ButtonIcon';

export default class LoginScreen extends Component {
  state = {
    focusInput: false,
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  onChangeText = (text, type) => {
    this.setState({[type]: text});
  };

  submitLogin = (email, password) => {
    return axios({
      method: 'POST',
      url: 'http://svcy3.myclass.vn/api/Users/signin',
      data: {
        email,
        password,
      },
    });
  };

  onSubmit = async () => {
    const {email, password, emailError, passwordError} = this.state;
    try {
      const result = await this.submitLogin(email, password);
      await AsyncStorage.setItem('userEmail', result.data.content.email);
      // console.log(result.data.content.email);
    } catch (error) {
      console.log(error);
    }

    // const {email, password, emailError, passwordError} = this.state;
    // axios({
    //   method: 'POST',
    //   url: 'http://svcy3.myclass.vn/api/Users/signin',
    //   data: {
    //     email,
    //     password,
    //   },
    // })
    //   .then(result => console.log(result))
    //   .catch(error => console.log(error));
    // const {email, password} = this.state;
    // const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // if (!regexEmail.test(email)) {
    //   this.setState({emailError: 'Email Không Hợp lệ'});
    // } else {
    //   this.setState({emailError: ''});
    // }
    // if (!(password.trim().length > 7)) {
    //   this.setState({
    //     passwordError: 'Password tối thiểu 8 ký tự và không có khoảng trắng',
    //   });
    // } else {
    //   this.setState({passwordError: ''});
    // }
  };

  setItem = async () => {
    try {
      await AsyncStorage.setItem('demoKey', 'demoValue');
    } catch (error) {
      console.log(error);
    }
  };

  getItem = async () => {
    try {
      const result = await AsyncStorage.getItem('userEmail');
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  onBlur = () => {
    const {email, password} = this.state;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!regexEmail.test(email)) {
      this.setState({emailError: 'Email Không Hợp lệ'});
    } else {
      this.setState({emailError: ''});
    }
    if (!(password.trim().length > 7)) {
      this.setState({
        passwordError: 'Password tối thiểu 8 ký tự và không có khoảng trắng',
      });
    } else {
      this.setState({passwordError: ''});
    }
  };

  // componentDidUpdate() {
  //   const {email, password, emailError, passwordError} = this.state;

  //   if (!emailError && !passwordError) {
  //     axios({
  //       method: 'POST',
  //       url: 'http://svcy3.myclass.vn/api/Users/signin',
  //       data: {
  //         email,
  //         password,
  //       },
  //     })
  //       .then(result => console.log(result))
  //       .catch(error => console.log(error));
  //   }
  // }

  saveUserEmailToInput = async () => {
    const email = await this.getItem();
    if (email) {
      this.setState({email});
    }
  };

  componentDidMount() {
    this.saveUserEmailToInput();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <ButtonIcon
              style={styles.goBackBtn}
              name={'left'}
              size={25}
              onPress={this.props.navigateToOnboardScreen}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Text header>Login</Text>
              <Text>Glad to see you back!</Text>
            </View>
            <View>
              <TextInput
                placeholder={'Email'}
                onChangeText={text => this.onChangeText(text, 'email')}
                value={this.state.email}
                errorText={this.state.emailError}
                onBlur={this.onBlur}
              />
              <TextInput
                placeholder={'Password'}
                onChangeText={text => this.onChangeText(text, 'password')}
                value={this.state.password}
                errorText={this.state.passwordError}
                onBlur={this.onBlur}
              />
            </View>
            <View style={styles.formFooter}>
              <Text>Forgot Password?</Text>
              <ButtonIcon
                name="arrowright"
                size={25}
                style={styles.loginBtn}
                onPress={this.onSubmit}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Text>or login with</Text>
            <View style={{flexDirection: 'row'}}>
              <ButtonIcon
                onPress={this.getItem}
                name="twitch"
                font={fontIcon.fontAwesome}
                size={30}
                style={styles.logoBtn}
              />
              <ButtonIcon
                name="twitch"
                font={fontIcon.fontAwesome}
                size={30}
                style={styles.logoBtn}
              />
              <ButtonIcon
                name="twitch"
                font={fontIcon.fontAwesome}
                size={30}
                style={styles.logoBtn}
              />
              <ButtonIcon
                name="twitch"
                font={fontIcon.fontAwesome}
                size={30}
                style={styles.logoBtn}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 30,
  },
  headerContainer: {
    flex: 1,
    // backgroundColor: '#bfb',
  },
  goBackBtn: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.5)',
    padding: 8,
    borderRadius: 8,
  },
  formContainer: {
    flex: 11,
    justifyContent: 'center',
  },
  formHeader: {
    marginBottom: 50,
  },
  formFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  loginBtn: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.5)',
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',

    // backgroundColor: '#bfb',
  },
  logoBtn: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.2)',
    borderRadius: 8,
    marginHorizontal: 10,
  },
});
