import React, {PropTypes} from 'react';
import {Navigation} from 'components';
import {container, innerContainer} from './styles.css';
import {connect} from 'react-redux';

const MainContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
    children: PropTypes.node
  },
  render () {
    return (
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
  (state) => ({isAuthed: state.isAuthed}) // inlined mapStateToProps
)(MainContainer);
