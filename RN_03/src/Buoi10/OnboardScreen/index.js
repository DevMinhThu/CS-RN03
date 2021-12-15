import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Text, Button} from '../components';

export default class OnboardScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.bannerContainer} />
        <View style={styles.infoContainer}>
          <Text header>Welcome</Text>
          <Text header>React Native 03</Text>

          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt
            neque velit! Nobis maxime cumque distinctio soluta numquam aut
            voluptate suscipit eveniet fugit mollitia est officia dolorem eos,
            atque ipsum?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Sign up'} style={styles.signupBtn} />
          <View style={styles.gradientBorder}>
            <Button
              onPress={this.props.navigateToLoginScreen}
              title={'Login'}
              style={styles.loginBtn}
            />
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
  },
  bannerContainer: {
    flex: 2,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  descriptionText: {
    marginTop: 20,
    opacity: 0.7,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  signupBtn: {
    height: 70,
    backgroundColor: '#19191f',
  },
  loginBtn: {
    // flex: 1,
    height: 70,
    margin: 1,
    backgroundColor: '#000',
  },
  gradientBorder: {
    height: 72,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 10,
  },
});
