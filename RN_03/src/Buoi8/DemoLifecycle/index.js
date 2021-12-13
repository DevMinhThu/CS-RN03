import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Child from './Child';

export default class DemoLifecycle extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      username: '',
    };
    this.onPress = this.onPress.bind(this);
    // console.log('constructor run');
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps run');

  //   return (state = props);
  // }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate run');
  //   return true;
  // }

  // componentDidMount() {
  //   console.log('componentDidMount run');
  // }

  onPress() {
    this.setState({number: this.state.number + 1});
  }

  render() {
    console.log('render run');
    return (
      <View style={styles.container}>
        <Text> DemoLifecycle Component </Text>
        <TouchableOpacity style={styles.btn} onPress={this.onPress}>
          <Text>Count Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.setState({username: 'RN03'})}>
          <Text>Change Username </Text>
        </TouchableOpacity>
        <Text> number: {this.state.number} </Text>
        <Child username={this.state.username} />
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
  btn: {
    backgroundColor: '#bbb',
    padding: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
});
