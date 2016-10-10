import React, {PropTypes} from 'react';
import {Navigation} from 'components';
import {container, innerContainer} from './styles.css';

const MainContainer = React.createClass({
  propTypes: {
    children: PropTypes.node
  },
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default MainContainer;
