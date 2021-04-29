import {connect} from 'react-redux';
import Progress from './Progress';

const mapStateToProps = state => {
  let breakfastCalorie = state.app.todayBreakfast.reduce(
    (sum, item) => sum + item.calories,
    0,
  );

  let lunchCalorie = state.app.todayLunch.reduce(
    (sum, item) => sum + item.calories,
    0,
  );

  let dinnerCalorie = state.app.todayDinner.reduce(
    (sum, item) => sum + item.calories,
    0,
  );

  let todayCalories = breakfastCalorie + lunchCalorie + dinnerCalorie;

  let sixDayTotalCal = state.app.last6dayCalories.reduce(
    (sum, item) => sum + item,
    0,
  );

  let calorieAvg = (sixDayTotalCal + todayCalories) / 7;

  let sixDayTotalWt = state.app.last6dayWeight.reduce(
    (sum, item) => sum + item,
    0,
  );

  let weightAvg = (sixDayTotalWt + state.app.weightToday) / 7;

  return {
    calorieGoal: state.app.calorieGoal,
    last7dayCalories: [...state.app.last6dayCalories, todayCalories],
    calorieAvg: Math.floor(calorieAvg),
    weightAvg: weightAvg.toPrecision(4),
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
