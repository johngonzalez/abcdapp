import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import Navigation from '../components/navigation';
// TODO: Login container should be core or parameter of main_layout
import Login from '../../../../client/modules/users/containers/Login';

const Layout = ({loggingIn, loggedIn, content = () => null }) => (
  <Grid>
    <Navigation loggingIn={loggingIn} loggedIn={loggedIn} />
    <Row>
      {
        loggedIn ? content() :
        loggingIn ? <div>Loading...</div> :
        <Login />
      }
    </Row>
  </Grid>
);

Layout.propTypes = {
  content: React.PropTypes.func,
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool
};

export default Layout;
