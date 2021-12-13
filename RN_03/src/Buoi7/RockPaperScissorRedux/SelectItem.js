import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {userSelect} from '../redux/actions/gameAction';
class SelectItem extends Component {
  render() {
    const {selectItem, selected} = this.props;
    return (
      <TouchableOpacity
        style={[styles.selectItemContainer, selected && styles.selectedItem]}
        onPress={() => this.props.userSelect(selectItem)}>
        <Image style={styles.selectImage} source={selectItem.image} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  selectItemContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: '#ffff00',
  },
  selectImage: {
    width: 50,
    height: 50,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    userSelect: selectItem => dispatch(userSelect(selectItem)),
  };
};

export default connect(null, mapDispatchToProps)(SelectItem);
