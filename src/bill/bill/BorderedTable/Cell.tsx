import * as React from 'react';

import { Text, StyleSheet, View } from '@react-pdf/renderer';


const getStyle = (type) => {
  return type === 'TopLeft' ? styles.topLeftCell 
  : type === 'Top' ? styles.topCell 
  : type === 'Left' ? styles.leftCell 
  : type === 'BottomLeft' ? styles.bottomLeftCell : styles.cell
}

const Cell = ({ type, children, style, ...props }) => <View style={[styles.cell, getStyle(type), ...style]}><Text  {...props}>{children}</Text></View>;

export default Cell;

const styles = StyleSheet.create({
  cell: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#000'
  },
  topLeftCell: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#000'
  },
  topCell: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#000'
  },
  leftCell: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#000'
  }
  
});
