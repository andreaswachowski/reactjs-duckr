import React, {PropTypes} from 'react';
import {errorMsg} from 'sharedStyles/styles.css';

Replies.propTypes = {
  error: PropTypes.string.isRequired
};

export default function Replies ({error}) {
  return (
    <div>
      {error ? <h3 className={errorMsg}>{error}</h3> : null}
    </div>
  );
}
