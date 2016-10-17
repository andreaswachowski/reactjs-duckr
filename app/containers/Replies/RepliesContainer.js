import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Replies} from 'components';
import {bindActionCreators} from 'redux';
import * as repliesActionCreators from 'redux/modules/replies';

const RepliesContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    replies: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired, // passed in from DuckDetails
    fetchAndHandleReplies: PropTypes.func.isRequired
  },
  getDefaultProps () {
    return {
      lastUpdated: 0,
      replies: {}
    };
  },
  componentDidMount: function () {
    this.props.fetchAndHandleReplies(this.props.duckId);
  },
  render () {
    return (
      <Replies
        isFetching={this.props.isFetching}
        error={this.props.error}
        lastUpdated={this.props.lastUpdated}
        replies={this.props.replies} />
    );
  }
});

function mapStateToProps (state, props) {
  const duckRepliesInfo = state.replies[props.duckId] || {};
  const { lastUpdated, replies } = duckRepliesInfo; // both undefined if duckRepliesInfo=={}

  return {
    isFetching: state.replies.isFetching,
    error: state.replies.error,
    lastUpdated,
    replies
  };
}

export default connect(mapStateToProps,
  (dispatch) => bindActionCreators(repliesActionCreators, dispatch),
)(RepliesContainer);
