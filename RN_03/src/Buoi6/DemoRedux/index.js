import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
  countUpAction,
  countDownAction,
  updateUsernameAction,
} from '../redux/actions/countAction';
import InfoContent from './InfoContent';

class DemoRedux extends Component {
  onCountUpPress = () => {
    this.props.countUp();
  };
  onCountDownPress = () => {
    this.props.countDown();
  };

  onUpdateUsernamePress = username => {
    this.props.updateUsername(username);
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}> Demo Redux Component </Text>
        <Text style={styles.headerText}>Number: {this.props.number}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.onCountUpPress}
            style={styles.buttonStyle}>
            <Text> Count Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onCountDownPress}
            style={[styles.buttonStyle, styles.backgroundPurple]}>
            <Text> Count Down</Text>
          </TouchableOpacity>
        </View>
        <InfoContent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  headerText: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    backgroundColor: '#bfb',
    padding: 10,
    margin: 5,
  },
  backgroundPurple: {
    backgroundColor: '#bbf',
  },
});

const mapStateToProps = state => {
  console.log(state);
  return {number: state.count.number};
};

const mapDispatchToProps = dispatch => {
  return {
    countUp: () => dispatch(countUpAction()),
    countDown: () => dispatch(countDownAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
