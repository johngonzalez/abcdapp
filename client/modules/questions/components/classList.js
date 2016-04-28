import React from 'react';
import NewClass from '../containers/newClass';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const ClassList = ({classes}) => (
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
  </div>
);

ClassList.propTypes = {
  classes: React.PropTypes.array
};

export default ClassList;
