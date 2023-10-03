import {View, Text} from 'react-native';
import React, {Component} from 'react';

const updatedComponet = (OriginalComponet) => {
  class NewComponent extends Component {
    clickMe() {
      alert('Name')
    }
    render() {
      return <OriginalComponet 
        height = {50}
        width = {200}
        name = {'HOC button'}
        color = {'white'}
        clickMe={this.clickMe}
      />;
    }
  }
  return NewComponent;
};
export default updatedComponet;
