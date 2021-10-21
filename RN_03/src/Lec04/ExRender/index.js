import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from './Icon';
import {angry, care, haha, like, love, sad} from './images';

export class ExRender extends Component {
  array = [angry, care, like, haha, love, sad];
  state = {
    selectedEmoji: care,
  };

  onPressIcon = icon => {
    this.setState({selectedEmoji: icon});
  };

  renderEmoji = () => {
    return this.array.map((icon, index) => (
      <Icon
        key={index}
        icon={icon}
        selectedEmoji={icon === this.state.selectedEmoji}
        onPress={() => this.onPressIcon(icon)}
      />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}> Bạn cảm thấy như thế nào? </Text>
        <Image source={this.state.selectedEmoji} style={styles.selectedEmoji} />
        <View style={styles.emojiContainer}>{this.renderEmoji()}</View>
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
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  selectedEmoji: {
    height: 150,
    width: 150,
    marginVertical: 20,
  },
  emoji: {
    height: 50,
    width: 50,
    margin: 5,
  },
  emojiContainer: {
    flexDirection: 'row',
  },
});

export default ExRender;
