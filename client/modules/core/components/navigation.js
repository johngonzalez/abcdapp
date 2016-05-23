import React from 'react';
import {PageHeader} from 'react-bootstrap';

const Navigation = ({loggedIn, loggingIn}) => (
    <PageHeader>
      abcdapp
      {'  '}
      <small>
        {
          loggedIn ? <a href="/logout">logout</a> :
          loggingIn ? <div>Loading...</div> : null
        }
      </small>
    </PageHeader>
);

Navigation.propTypes = {
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool
};

export default Navigation;
