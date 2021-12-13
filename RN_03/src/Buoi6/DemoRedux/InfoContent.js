import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {updateUsernameAction} from '../redux/actions/countAction';

class InfoContent extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}> Info Content Component </Text>

        <Text style={styles.headerText}>User Name: {this.props.username}</Text>
        <Text style={styles.headerText}>Address: {this.props.address}</Text>
        <TouchableOpacity
          onPress={() => this.props.updateUsername('React Native 03')}
          style={[styles.buttonStyle, styles.backgroundPurple]}>
          <Text> Update Username</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.reset()}
          style={[styles.buttonStyle, styles.backgroundPurple]}>
          <Text>RESET</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    marginVertical: 10,
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

const mapStateToProps = state => ({
  username: state.user.username,
  address: state.user.address,
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(updateUsernameAction(username)),
  reset: () => dispatch({type: 'RESET'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoContent);
