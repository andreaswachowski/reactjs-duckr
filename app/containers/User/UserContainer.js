import React, {PropTypes} from 'react';
import {User} from 'components';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as usersActionCreators from 'redux/modules/users';
import * as usersDucksActionCreators from 'redux/modules/usersDucks';
import {staleUser, staleDucks} from 'helpers/utils';

const UserContainer = React.createClass({
  propTypes: {
    noUser: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    routeParams: PropTypes.any,
    error: PropTypes.string.isRequired,
    duckIds: PropTypes.array.isRequired,
    fetchAndHandleUsersDucks: PropTypes.func.isRequired,
    fetchAndHandleUser: PropTypes.func.isRequired,
    lastUpdatedUser: PropTypes.number.isRequired,
    lastUpdatedDucks: PropTypes.number.isRequired
  },
  componentDidMount: function () {
    const uid = this.props.routeParams.uid;
    if (this.props.noUser === true || staleUser(this.props.lastUpdatedUser)) {
      this.props.fetchAndHandleUser(uid);
    }

    if (this.props.noUser === true || staleDucks(this.props.lastUpdatedDucks)) {
      this.props.fetchAndHandleUsersDucks(uid);
    }
  },
  render () {
    return (
      <User
        noUser={this.props.noUser}
        name={this.props.name}
        isFetching={this.props.isFetching}
        error={this.props.error}
        duckIds={this.props.duckIds} />
    );
  }
});

function mapStateToProps ({users, usersDucks}, props) {
  const specificUsersDucks = usersDucks[props.routeParams.uid];
  const user = users[props.routeParams.uid];
  const noUser = typeof user === 'undefined';

  return {
    noUser,
    name: noUser ? '' : user.info.name,
    isFetching: users.isFetching || usersDucks.isFetching,
    error: users.error || usersDucks.error,
    lastUpdated: specificUsersDucks ? specificUsersDucks.lastUpdated : 0,
    duckIds: specificUsersDucks ? specificUsersDucks.duckIds : [],
    lastUpdatedUser: user ? user.lastUpdated : 0,
    lastUpdatedDucks: specificUsersDucks ? specificUsersDucks.lastUpdated : 0
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...usersActionCreators,
    ...usersDucksActionCreators
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
