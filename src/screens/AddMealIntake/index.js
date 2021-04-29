import {connect} from 'react-redux';
import AddMealIntake from './AddMealIntake';
import {
  addBreakfast,
  addDinner,
  addLunch,
} from '../../redux/actions/appActions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addBreakfast: intake => {
      dispatch(addBreakfast(intake));
    },
    addLunch: intake => {
      dispatch(addLunch(intake));
    },
    addDinner: intake => {
      dispatch(addDinner(intake));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealIntake);
