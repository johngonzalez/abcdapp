import React from 'react';
import {Grid, Row, PageHeader} from 'react-bootstrap';
// import Navigation from './navigation';

const Layout = ({content = () => null }) => (
  <Grid>
      <PageHeader>
        abcdapp
      {/* <Navigation /> */}
    </PageHeader>
    <Row>
      {content()}
    </Row>
  </Grid>
);

Layout.propTypes = {
  content: React.PropTypes.func
};

export default Layout;
