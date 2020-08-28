import * as React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Cell from './BorderedTable/Cell';

const styles = StyleSheet.create({
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
    width: '25%'
  },
  header: {
    backgroundColor: '#0313fc',
    color: '#f9ff4a'
  },
  dataCell: {

  }

});

const SkillEntry = ({ name, skills }) => (
  <View>
    <View>
      <Cell style={[styles.column, styles.header]} type="TopLeft" >Account Number</Cell>
      <Cell style={[styles.column, styles.header]} type="Top">Billing Date</Cell>
      <Cell style={[styles.column, styles.header]} type="Top">Due Date</Cell>
      <Cell style={[styles.column, styles.header]} type="Top">Amount Due</Cell>
    </View>
    <View>
      <Cell style={[styles.column, styles.dataCell]} type="Left" >1402821</Cell>
      <Cell style={[styles.column, styles.dataCell]} type="Left">12/30/2011</Cell>
      <Cell style={[styles.column, styles.dataCell]} type="Left">1/27/2012</Cell>
      <Cell style={[styles.column, styles.dataCell]} type="Left">101.84</Cell>
    </View>
  </View>
);

const Skills = () => (
  <View>
    <Title>Skills</Title>
    <SkillEntry
      name="Combat Abilities"
      skills={[
        'Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire',
        'Defeated the Rancor and rescued Princess Leia from Jabba the Hutt',
        'Competent fighter pilot as well as an excelent shot with nearly any weapon',
      ]}
    />
  </View>
);

export default Skills;
