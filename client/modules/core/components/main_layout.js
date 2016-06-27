import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import Navigation from '../containers/navigation';
// TODO: Login container should be core or parameter of main_layout
import Login from '../../../../client/modules/users/containers/login';

const Layout = ({loggingIn, loggedIn, nologging, content = () => null }) => (
  <Grid>
    <Navigation loggingIn={loggingIn} loggedIn={loggedIn} />
    {
      nologging ?
        content() :
        <Row>
          {
            loggedIn ? content() :
            loggingIn ? <div>Loading...</div> :
            <Login />
          }
        </Row>
    }
  </Grid>
);

Layout.propTypes = {
  content: React.PropTypes.func,
  nologging: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool
};

export default Layout;
