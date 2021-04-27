import {connect} from 'react-redux';
import ShowMealIntakes from './ShowMealIntakes';

const mapStateToProps = state => {
  return {
    todayBreakfast: state.app.todayBreakfast,
    todayLunch: state.app.todayLunch,
    todayDinner: state.app.todayDinner,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMealIntakes);
