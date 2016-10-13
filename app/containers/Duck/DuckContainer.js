import React, {PropTypes} from 'react';
import Duck from 'components';

const { func, object, bool, number } = PropTypes;

const DuckContainer = React.createClass({
  propTypes: {
    duck: object.isRequired,
    numberOfLikes: number,
    isLiked: bool.isRequired,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    handleDeleteLike: func.isRequired,
    addAndHandleLike: func.isRequired
  },
  getDefaultProps () {
    return {
      hideReplyBtn: false,
      hideLikeCount: true
    };
  },
  render () {
    return (
      <Duck />
    );
  }
});

export default DuckContainer;
