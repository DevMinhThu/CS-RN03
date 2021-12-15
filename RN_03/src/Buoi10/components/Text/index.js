import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class AppText extends Component {
  render() {
    const {children, style, header} = this.props;
    return (
      <Text
        style={[styles.defaultTextStyle, header && styles.headerStyle, style]}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: '#fff',
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: '700',
  },
});

export default AppText;
