import {connect} from 'react-redux';
import Track from './Track';

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

  return {
    calorieGoal: state.app.calorieGoal,
    breakfastCalorie: breakfastCalorie,
    lunchCalorie: lunchCalorie,
    dinnerCalorie: dinnerCalorie,
    weightToday: state.app.weightToday,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
