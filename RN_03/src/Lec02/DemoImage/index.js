import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export class DemoImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./iron.jpg')} style={styles.image} />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96lfVbYQjQGo_4sguZv-WzVT8lnhF9aQUCA&usqp=CAU',
          }}
          style={styles.image}
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
  image: {
    width: 200,
    height: 200,
  },
});

export default DemoImage;
