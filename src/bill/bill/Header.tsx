import * as React from 'react';

import { Image, View, StyleSheet, Text } from '@react-pdf/renderer';
import logo from './cayentaLogo'
import Cell from './BorderedTable/Cell';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#112131',
    borderStyle: 'solid',
    backgroundColor: '#EEE',
    borderRadius: 20,
    padding: 10,
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Lato',
  },
  subtitle2: {
    fontSize: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
  column: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  header: {
    backgroundColor: '#0313fc',
    fontSize: 10,
    color: '#f9ff4a'
  },
  dataCell: {
    fontSize: 8,
  },
  row: {
    flexDirection: 'row',
  },
}as any);

export default () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Image src={logo} style={styles.column} />
      <View style={[styles.column, styles.subtitle]}>
        <Text>2955 Virtual Way</Text>
        <Text>Vancouver, BC V5M 4X6</Text>
      </View>
      <View style={[styles.column2, styles.subtitle2]}>
        <Text>Contact us at:</Text><Text>
          Vancouver Public Utilities</Text><Text>
          Membership Corporation: (604) 570-9762</Text>
      </View>
    </View>
    <Table />
  </View>
);

const Table = () => (
  <View>
    <View style={styles.row}>
      <Cell style={[styles.column, styles.header]} type="TopLeft" >Account Number</Cell>
      <Cell style={[styles.column, styles.header]} type="Top">Billing Date</Cell>
      <Cell style={[styles.column, styles.header]} type="Top">Due Date</Cell>
      <Cell style={[styles.column, styles.header]} type="Top">Amount Due</Cell>
    </View>
    <View style={styles.row}>
      <Cell style={[styles.column, styles.dataCell]} type="Left" >1402821</Cell>
      <Cell style={[styles.column, styles.dataCell]} type="">12/30/2011</Cell>
      <Cell style={[styles.column, styles.dataCell]} type="">1/27/2012</Cell>
      <Cell style={[styles.column, styles.dataCell]} type="">101.84</Cell>
    </View>
  </View>
);