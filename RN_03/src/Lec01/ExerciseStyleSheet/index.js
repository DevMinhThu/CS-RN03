import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxColor = ({color, nameColor}) => {
  return (
    <View style={[styles.boxColor, {backgroundColor: color}]}>
      <Text style={styles.textColor}>{`${nameColor}: ${color}`}</Text>
    </View>
  );
};

const ExerciseStyleSheet = () => {
  return (
    <View style={styles.viewContainer}>
      <BoxColor color={'#C9C9FF'} nameColor={'Purple'} />
      <BoxColor color={'#3D85C6'} nameColor={'Blue'} />
      <BoxColor color={'#96CC96'} nameColor={'Green'} />
      <BoxColor color={'#F4B940'} nameColor={'Yellow'} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  boxColor: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textColor: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ExerciseStyleSheet;
