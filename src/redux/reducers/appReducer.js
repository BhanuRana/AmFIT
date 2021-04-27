import {
  SET_CALORIE_GOAL,
  ADD_BREAKFAST_MEAL,
  ADD_LUNCH_MEAL,
  ADD_DINNER_MEAL,
  UPDATE_WEIGHT_TODAY,
} from '../actions/appActions';

const initState = {
  calorieGoal: 2400,

  todayBreakfast: [
    {meal: 'OatMeal', calories: 400},
    {meal: '2 Bananas', calories: 250},
    {meal: '200ml Milk', calories: 250},
  ],
  todayLunch: [
    {meal: '1 Bowl Rajma', calories: 300},
    {meal: '2 Roti', calories: 100},
  ],
  todayDinner: [],
  weightToday: 64.2,

  last6dayCalories: [2200, 2600, 2200, 2400, 2450, 2300],
  last6dayWeight: [64.2, 64.15, 64.2, 64.5, 64.5, 65],
};

const appReducer = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_CALORIE_GOAL:
      return {
        ...state,
        calorieGoal: payload.calorieGoal,
      };

    case ADD_BREAKFAST_MEAL:
      return {
        ...state,
        todayBreakfast: [...todayBreakfast, payload.intake],
      };

    case ADD_LUNCH_MEAL:
      return {
        ...state,
        todayLunch: [...todayLunch, payload.intake],
      };

    case ADD_DINNER_MEAL:
      return {
        ...state,
        todayDinner: [...todayDinner, payload.intake],
      };

    case UPDATE_WEIGHT_TODAY:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default appReducer;
