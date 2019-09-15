import React from 'react';
import NewSession from '../containers/newSession';
import SessionFinish from '../containers/sessionFinish';
import {Button} from 'react-bootstrap';

const SessionControlBar = ({classId, sessionUnfinished}) => (
  sessionUnfinished ?
    !sessionUnfinished.saving ?
      <SessionFinish sessionId={sessionUnfinished._id} code={sessionUnfinished.code}>
        {sessionUnfinished.updating ? 'Finalizando clase...' : 'Finaliza esta clase!'}
      </SessionFinish> :
      <Button bsStyle="default" bsSize="large" block disabled>
        Generando código...
      </Button> :
    <NewSession classId={classId} />
);

SessionControlBar.propTypes = {
  classId: React.PropTypes.string.isRequired,
  sessionUnfinished: React.PropTypes.object
};

export default SessionControlBar;
