import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {container, navContainer, link} from './styles.css';

NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
};
function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
      </ul>
    : null;
}

ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
};
function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li>{'NEW DUCK'}</li>
        <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
      </ul>
    : <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
        <li><Link to='/auth' className={link}>{'Authenticate'}</Link></li>
      </ul>;
}

Navigation.propTypes = {
  isAuthed: PropTypes.bool.isRequired
};
export default function Navigation ({isAuthed}) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  );
}
