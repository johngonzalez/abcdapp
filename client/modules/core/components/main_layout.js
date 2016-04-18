import React from 'react';
// import Navigation from './navigation';

const Layout = ({content = () => null }) => (
  <div>
    <header>
    <h1>abcdapp</h1>
    {/* <Navigation /> */}
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>abcdapp</small>
    </footer>
  </div>
);

Layout.propTypes = {
  content: React.PropTypes.func
};

export default Layout;
