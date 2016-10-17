import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Replies} from 'components';

const RepliesContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    replies: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired // passed in from DuckDetails
  },
  getDefaultProps () {
    return {
      lastUpdated: 0,
      replies: {}
    };
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

export default connect(mapStateToProps)(RepliesContainer);
