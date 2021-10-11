import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export class DemoTextInput extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter input ..."
          keyboardType="number-pad"
          style={styles.input}
        />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DemoTextInput;
