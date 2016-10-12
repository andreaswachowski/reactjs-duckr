import {bindActionCreators} from 'redux';
import {Modal} from 'components';
import {connect} from 'react-redux';
import * as modalActionCreators from 'redux/modules/modal';
import * as ducksActionCreators from 'redux/modules/ducks';

// No need for a ModalContainer, since it doesn't have any state
// nor any lifecycle events. We can directly pass the props to the
// component

function mapStateToProps ({modal, users}) {
  const duckTextLength = modal.duckText.length;

  return {
    // the Modal component requires a user object, therefore we make sure
    // to always pass an object
    user: users[users.authedId] ? users[users.authedId].info : {},
    duckText: modal.duckText,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({...modalActionCreators, ...ducksActionCreators}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
