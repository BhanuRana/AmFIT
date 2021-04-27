import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    minHeight: 70,
    padding: 20,
    backgroundColor: Colors.white,
    elevation: 5,
    marginBottom: 15,
  },
  headerTitle: {fontSize: 22, fontWeight: '600'},
});

export default Header;
