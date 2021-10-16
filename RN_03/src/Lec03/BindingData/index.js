import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export class BindingData extends Component {
  name = 'React Native 03';
  address = 'Ha Noi';

  state = {
    isLogin: false,
  };

  renderName = () => {
    return this.name;
  };

  handleName = () => {
    if (this.state.isLogin) {
      return (
        <>
          <Text> {this.name} </Text>
          <Text> {this.address} </Text>
        </>
      );
    }
  };

  onPressButton = () => {
    // bất đồng bộ trong setState
    /*
        - change state xong mới thực thi trong callBack
    */
    this.setState(
      {
        isLogin: !this.isLogin,
      },
      () => {
        console.log(this.state.isLogin);
      },
    );
    console.log(this.state.isLogin);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text> {this.name} </Text> */}
        <Text> {this.renderName()} </Text>
        {this.handleName()}
        <TouchableOpacity style={styles.button} onPress={this.onPressButton}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
  },
});

export default BindingData;
