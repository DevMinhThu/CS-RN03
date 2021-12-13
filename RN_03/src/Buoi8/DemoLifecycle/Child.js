import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Child extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   numberChild: 3,
    // };
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.number > state.numberChild) {
  //     return (state.numberChild = props.number);
  //   }
  //   return state;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevProps', prevProps);
  //   console.log('componentDidUpdate Child run');
  // }

  // componentDidMount() {
  //   this.sub = setInterval(() => {
  //     console.log('interval run');
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.sub);
  //   console.log('componentWillUnmount run');
  // }

  shouldComponentUpdate(nextProps) {
    if (nextProps.username !== this.props.username) {
      return true;
    }
    return false;
  }

  render() {
    console.log('renderChild run');
    return (
      <>
        <Text> Child Component </Text>
        <Text> username: {this.props.username} </Text>
      </>
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
