import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import WeightInput from '../../components/WeightInput/WeightInput';

const UpdateWeight = props => {
  const {route, navigation, weightToday, updateWeight} = props;

  const {docId} = route.params;

  const weightUpdateHandler = newWeight => {
    updateWeight(+newWeight);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <WeightInput placeholder={weightToday} onSubmit={weightUpdateHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
});

export default UpdateWeight;
