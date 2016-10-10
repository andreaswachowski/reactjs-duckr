import React, {PropTypes} from 'react';
import {centeredContainer, largeHeader, errorMsg} from 'sharedStyles/styles.css';

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
};

export default function Authenticate ({error, isFetching, onAuth}) {
  return (
    <div className={centeredContainer}>
      <h1 className={largeHeader}>{'Authenticate'}</h1>
      <p>{'Facebook auth button'}</p>
      {error ? <p className={errorMsg}>{error}</p> : null}
    </div>
  );
}
