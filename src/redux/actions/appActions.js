export const SET_CALORIE_GOAL = 'SET_CALORIE_GOAL';
export const ADD_BREAKFAST_MEAL = 'ADD_BREAKFAST_MEAL';
export const ADD_LUNCH_MEAL = 'ADD_LUNCH_MEAL';
export const ADD_DINNER_MEAL = 'ADD_DINNER_MEAL';
export const UPDATE_WEIGHT_TODAY = 'UPDATE_WEIGHT_TODAY';

export const setCalorieGoal = calorieGoal => {
  return (dispatch, getState) => {
    dispatch({type: SET_CALORIE_GOAL, payload: {calorieGoal}});
  };
};

export const addBreakfast = intake => {
  return (dispatch, getState) => {
    dispatch({type: ADD_BREAKFAST_MEAL, payload: {intake}});
  };
};

export const addLunch = intake => {
  return (dispatch, getState) => {
    dispatch({type: ADD_LUNCH_MEAL, payload: {intake}});
  };
};

export const addDinner = intake => {
  return (dispatch, getState) => {
    dispatch({type: ADD_DINNER_MEAL, payload: {intake}});
  };
};

export const updateWeight = weight => {
  return (dispatch, getState) => {
    dispatch({type: UPDATE_WEIGHT_TODAY, payload: {weight}});
  };
};
