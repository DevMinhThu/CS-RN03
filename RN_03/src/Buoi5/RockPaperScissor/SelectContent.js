import React, {Component} from 'react';
import SelectItem from './SelectItem';

export default class SelectContent extends Component {
  renderSelectItem = () => {
    return this.props.listSelect.map(selectItem => (
      <SelectItem
        key={selectItem.id}
        selectImage={selectItem.image}
        onPress={() => this.props.onPress(selectItem)}
        selected={selectItem.id === this.props.playerSelectItem}
      />
    ));
  };

  render() {
    return this.renderSelectItem();
  }
}
