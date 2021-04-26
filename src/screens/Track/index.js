import {connect} from 'react-redux';
import Track from './Track';

const mapStateToProps = state => {
  console.log(state);
  return {
    app: state.app,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
