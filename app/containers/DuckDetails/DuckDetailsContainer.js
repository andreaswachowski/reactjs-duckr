import React, {PropTypes} from 'react';
import {DuckDetails} from 'components';
import {connect} from 'react-redux';
import * as duckActionCreators from 'redux/modules/ducks';
import {bindActionCreators} from 'redux';

const DuckDetailsContainer = React.createClass({
  propTypes: {
    authedUser: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckAlreadyFetched: PropTypes.bool.isRequired,
    removeFetching: PropTypes.func.isRequired,
    fetchAndHandleDuck: PropTypes.func.isRequired
  },
  componentDidMount: function () {
    if (this.props.duckAlreadyFetched === false) {
      this.props.fetchAndHandleDuck(this.props.duckId);
    } else {
      this.props.removeFetching();
    }
  },
  render () {
    return (
      <DuckDetails
        authedUser={this.props.authedUser}
        duckId={this.props.duckId}
        isFetching={this.props.isFetching}
        error={this.props.error} />
    );
  }
});

function mapStateToProps ({ducks, likeCount, users}, props) {
  return {
    isFetching: ducks.isFetching || likeCount.isFetching,
    error: ducks.error,
    authedUser: users[users.authedId].info,
    duckId: props.routeParams.duckId,
    duckAlreadyFetched: !!ducks[props.routeParams.duckId]
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(duckActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckDetailsContainer);