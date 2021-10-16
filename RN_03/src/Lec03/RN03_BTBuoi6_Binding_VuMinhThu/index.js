import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import IMAGES_ICON from './images/images';

export default class BTLec06 extends Component {
  state = {
    title: 'Bạn đang cảm thấy như thế nào?',
    listIcon: IMAGES_ICON,
    showIcon: require('./images/care.png'),
  };

  changeIcon = icon => {
    this.setState({
      ...this.state,
      showIcon: icon,
    });
  };

  renderListIcon = () => {
    return this.state.listIcon.map((icon, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.btn}
          onPress={() => this.changeIcon(icon)}>
          <Image source={icon} style={styles.image} />
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <Image source={this.state.showIcon} />
        <View style={styles.viewIcon}>{this.renderListIcon()}</View>
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
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 20,
  },
  image: {
    width: 35,
    height: 35,
  },
  viewIcon: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  btn: {
    marginHorizontal: 10,
  },
});
