import {connect} from 'react-redux';
import UpdateWeight from './UpdateWeight';
import {updateWeight} from '../../redux/actions/appActions';

const mapStateToProps = state => {
  return {
    weightToday: state.app.weightToday + '',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWeight: weight => {
      dispatch(updateWeight(weight));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateWeight);
