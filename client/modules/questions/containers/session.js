import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Session from '../components/session.js';

export const composer = ({context, sessionId}, onData) => {
  const {Meteor, Collections, LoginState} = context();
  if (Meteor.subscribe('sessions.classes.composite', sessionId).ready()) {
    const session = Collections.Sessions.findOne(sessionId);
    if (session && session.classId) {
      const classItem = Collections.Classes.findOne(session.classId);
      if (classItem && classItem.isPublic || LoginState.signedUp()) {
        const classId = classItem._id;
        onData(null, {sessionId, classId});
      } else {
        const error = {
          type: 'SESSION_PRIVATE',
          message: 'Esta clase es privada, ingresa con tu cuenta'
        };
        onData(null, {error});
      }
    } else {
      const error = {
        type: 'SESSION_NON_EXISTS',
        message: 'No se encuentra la clase :( intenta ingresar otro código'
      };
      onData(null, {error});
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Session);
