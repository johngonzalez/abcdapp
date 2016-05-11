import React from 'react';
import NewClass from '../containers/newClass';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

// TODO: Wrap ClassList into authComposer component
const ClassList = ({loggedIn, loggingIn, classes}) => (
  <div>
    {
      loggedIn ?
      <div>
        <ListGroup>
          {
            classes ?
              classes.map(c => (
                <ListGroupItem key={c._id} href={c.saving ? null : `/class/${c._id}`}>
                  {c.className}
                  {c.saving ? <b> ...saving</b> : null}
                </ListGroupItem>
              )) :
              null
          }
        </ListGroup>
        <NewClass />
      </div> :
      loggingIn ? <div>Loading...</div> : <a href="/login">Please log in</a>
    }
  </div>
);

ClassList.propTypes = {
  classes: React.PropTypes.array,
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool
};

export default ClassList;
