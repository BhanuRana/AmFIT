import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import WeightInput from '../../components/WeightInput/WeightInput';

const UpdateWeight = props => {
  const {route, navigation} = props;

  const {weight, docId} = route.params;

  const weightUpdateHandler = newWeight => {
    console.log(
      `Update weight from ${weight} to ${newWeight} for document: ${docId}`,
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <WeightInput placeholder={weight} onSubmit={weightUpdateHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
});

export default UpdateWeight;
