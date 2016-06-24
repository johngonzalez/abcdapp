import React from 'react';
import {PageHeader} from 'react-bootstrap';

const Navigation = ({loggedIn, loggingIn, logout}) => (
    <PageHeader>
      abcdapp
      {'  '}
      <small>
        {
          loggedIn ? <a onClick={logout} style={{cursor: 'pointer'}}>logout</a> :
          loggingIn ? <div>Loading...</div> : null
        }
      </small>
    </PageHeader>
);

Navigation.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  loggingIn: React.PropTypes.bool.isRequired,
  logout: React.PropTypes.func.isRequired
};

export default Navigation;
