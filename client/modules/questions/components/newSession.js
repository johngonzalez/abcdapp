import React from 'react';
import {Button} from 'react-bootstrap';

const NewSession = ({error, create, classId}) => (
  <div>
    {error ? <p style={{color: 'red'}}>{error}</p> : null}
    <Button bsStyle="default" bsSize="large" block onClick={e => create(e, classId)}>
      Inicia esta clase!
    </Button>
  </div>
);

NewSession.propTypes = {
  error: React.PropTypes.string,
  create: React.PropTypes.func.isRequired,
  classId: React.PropTypes.string.isRequired
};

export default NewSession;
