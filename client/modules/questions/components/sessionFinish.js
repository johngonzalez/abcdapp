import React from 'react';
import {Button} from 'react-bootstrap';

const SessionFinish = ({error, sessionId, code, finish, children}) => (
  <div>
    {error ? <p style={{color: 'red'}}>error</p> : null}
    <p>{`Comparte el siguiente código con tus estudiantes: ${code}`}</p>
    <Button bsStyle="danger" bsSize="large" block onClick={e => finish(e, sessionId)}>
      {children}
    </Button>
  </div>
);

SessionFinish.propTypes = {
  error: React.PropTypes.string,
  sessionId: React.PropTypes.string.isRequired,
  code: React.PropTypes.string.isRequired,
  finish: React.PropTypes.func.isRequired,
  children: React.PropTypes.string
};

export default SessionFinish;
