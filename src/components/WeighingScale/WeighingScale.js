import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../utils/Colors';

const WeighingScale = props => {
  const {weight = ''} = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionTitle}>Weight</Text>
        <Icon name="scale-bathroom" color={Colors.gray} size={80} />
      </View>
      <View>
        <Text style={styles.weightText}>{weight}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: '92%',
    elevation: 3,
    borderRadius: 7,
    overflow: 'hidden',
  },
  sectionTitle: {fontSize: 22, fontWeight: 'bold', color: Colors.black},
  weightText: {fontSize: 36, fontWeight: '600'},
});

export default WeighingScale;
