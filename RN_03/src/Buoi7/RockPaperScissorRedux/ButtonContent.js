import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {calResult, userPlay, userReset} from '../redux/actions/gameAction';
import Button from './Button';

class ButtonContent extends Component {
  onPlayPress = () => {
    const randomBotSelect = setInterval(() => {
      this.props.userPlay();
    }, 100);
    setTimeout(() => {
      clearInterval(randomBotSelect);
      this.props.calResult();
    }, 2000);
  };

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button title="Play" onPress={this.onPlayPress} />
        <Button
          title="Reset"
          onPress={this.props.userReset}
          isLinear={true}
          colors={['#f9f', '#ff0']}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    userPlay: () => dispatch(userPlay()),
    calResult: () => dispatch(calResult()),
    userReset: () => dispatch(userReset()),
  };
};

export default connect(null, mapDispatchToProps)(ButtonContent);
