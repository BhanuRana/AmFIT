import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Colors from '../../utils/Colors';
import IntakeInput from '../../components/IntakeInput/IntakeInput';

const AddMealIntake = props => {
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');

  const addMeal = () => {
    alert(`Add meal ${mealName} with ${calories} cal`);
  };

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <IntakeInput
            placeholder="Meal name"
            type="text"
            value={mealName}
            onChange={setMealName}
          />
          <IntakeInput
            placeholder="Calories"
            value={calories}
            onChange={setCalories}
          />
        </View>

        <TouchableOpacity style={styles.addMealBtn} onPress={addMeal}>
          <Text style={styles.addMealText}>Add Meal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
  container: {flex: 1, justifyContent: 'space-between'},

  inputContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    marginVertical: 30,
  },

  addMealBtn: {
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: Colors.green,
  },
  addMealText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default AddMealIntake;
