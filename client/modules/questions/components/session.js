import React from 'react';
import {Panel} from 'react-bootstrap';
import LoginUser from '../../users/containers/loginUser';
import SessionRegister from '../containers/sessionRegister';
import QuestionsTest from '../containers/questionsTest';

const RenderError = ({type, message}) => {
  const children = () => {
    switch (type) {
      case 'SESSION_PRIVATE': return <LoginUser />;
      case 'SESSION_NON_EXISTS': return <SessionRegister />;
    }
  };
  return (
    <div>
      <p style={{color: 'red'}}>{message}</p>
      <Panel>{children()}</Panel>
    </div>
  );
};

RenderError.propTypes = {
  type: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
};

const SessionItem = ({error, session, classId}) => (
  error ?
    <RenderError type={error.type} message={error.message} /> :
    <QuestionsTest
      sessionId={session._id}
      classId={classId}
      isFinished={session.isFinished}
    />
);

SessionItem.propTypes = {
  error: React.PropTypes.object,
  session: React.PropTypes.object,
  classId: React.PropTypes.string,
};

export default SessionItem;
