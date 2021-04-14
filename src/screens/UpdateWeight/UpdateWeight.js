import React from 'react';
import {ScrollView} from 'react-native';
import WeightInput from '../../components/WeightInput/WeightInput';
import styles from './styles';

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

export default UpdateWeight;
