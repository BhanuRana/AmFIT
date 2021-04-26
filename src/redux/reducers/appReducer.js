import {SET_CALORIE_GOAL} from '../actions/appActions';

const initState = {
  calorieGoal: 2600,
  weight: 64,
  today: {calorieGoal: 2800, weight: 65.2},
  last7days: [{calorieGoal: 2600, weight: 64.2}],
};

const appReducer = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_CALORIE_GOAL:
      return {
        ...state,
        calorieGoal: payload.calorie,
      };

    default:
      return state;
  }
};

export default appReducer;
