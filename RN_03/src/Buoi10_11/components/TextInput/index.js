import React, {Component} from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';
import Text from '../Text';

export default class TextInput extends Component {
  state = {
    focusInput: false,
  };

  // onFocus = () => {
  //   this.setState({focusInput: true});
  // };
  // onBlur = () => {
  //   if (this.props.onBlur) {
  //     this.props.onBlur();
  //   }
  //   this.setState({focusInput: false});
  // };

  render() {
    const {style, errorText, touched, placeholder} = this.props;
    return (
      <>
        <RNTextInput
          placeholderTextColor="#rgba(255,255,255, 0.5)"
          {...this.props}
          // onFocus={this.onFocus}
          // onBlur={this.onBlur}
          style={[
            styles.textInput,
            this.state.focusInput && styles.focusStyle,
            errorText && styles.errorStyle,
            style,
          ]}
          // value={value}
          // onChangeText={onChangeText}
          // secureTextEntry={secureTextEntry}
        />
        {!!errorText && <Text>{errorText}</Text>}
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#19191f',
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: '#fff',
    marginTop: 20,
    marginBottom: 5,
  },
  errorStyle: {borderColor: 'red', borderWidth: 1},
  focusStyle: {borderColor: 'cyan', borderWidth: 1},
});
