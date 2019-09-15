import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Session from '../components/session.js';

const errors = [
  {
    type: 'SESSION_PRIVATE',
    message: 'Esta clase es privada, ingresa con tu cuenta'
  },
  {
    type: 'SESSION_NON_EXISTS',
    message: 'No se encuentra la clase :( intenta ingresar otro código'
  }
];

export const composer = ({context, sessionId}, onData) => {
  const {Meteor, Collections, LoginState} = context();
  if (Meteor.subscribe('sessions.single.composite', sessionId).ready()) {
    const session = Collections.Sessions.findOne(sessionId);
    if (session && session.classId) {
      const classItem = Collections.Classes.findOne(session.classId);
      if (classItem && classItem.isPublic || LoginState.signedUp()) {
        const classId = classItem._id;
        onData(null, {session, classId});
      } else {
        onData(null, {error: errors[0]});
      }
    } else {
      onData(null, {error: errors[1]});
    }
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Session);
