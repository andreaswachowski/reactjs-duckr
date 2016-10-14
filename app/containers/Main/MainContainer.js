import React, {PropTypes} from 'react';
import {Navigation} from 'components';
import {container, innerContainer} from './styles.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActionCreators from 'redux/modules/users';
import * as usersLikesActionCreators from 'redux/modules/usersLikes';
import {formatUserInfo} from 'helpers/utils';
import {firebaseAuth} from 'config/constants';

const MainContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    authUser: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    removeFetchingUser: PropTypes.func.isRequired,
    children: PropTypes.node,
    setUsersLikes: PropTypes.func.isRequired
  },
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  componentDidMount: function () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) { // if we are logged in
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, userData.uid);
        this.props.authUser(user.uid);
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now());
        this.props.setUsersLikes();
        if (this.props.location.pathname === '/') {
          this.context.router.replace('feed');
        }
      } else {
        this.props.removeFetchingUser();
      }
    });
  },
  render () {
    return this.props.isFetching === true
      ? null
      : (
        <div className={container}>
          <Navigation isAuthed={this.props.isAuthed} />
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
        );
  }
});

export default connect(
  ({users}) => ({isAuthed: users.isAuthed, isFetching: users.isFetching}), // inlined mapStateToProps
  (dispatch) => bindActionCreators({
    ...userActionCreators,
    ...usersLikesActionCreators
  }, dispatch)
)(MainContainer);
