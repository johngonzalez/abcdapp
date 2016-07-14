import React from 'react';
import {Panel} from 'react-bootstrap';
import LoginUser from '../../users/containers/loginUser';
import SessionRegister from '../containers/sessionRegister';
import QuestionsTest from '../containers/questionsTest';

const SessionItem = ({error, sessionId, classId}) => (
  !error ?
    <QuestionsTest sessionId={sessionId} classId={classId} /> :
    error.type === 'SESSION_PRIVATE' ?
      <div>
        <p style={{color: 'red'}}>{error.message}</p>
        <Panel><LoginUser /></Panel>
      </div> :
      error.type === 'SESSION_NON_EXISTS' ?
      <div>
        <p style={{color: 'red'}}>{error.message}</p>
        <Panel><SessionRegister /></Panel>
      </div> :
      <p style={{color: 'red'}}>Oops! error desconocido</p>
);

SessionItem.propTypes = {
  error: React.PropTypes.object,
  sessionId: React.PropTypes.string,
  classId: React.PropTypes.string,
};

export default SessionItem;
