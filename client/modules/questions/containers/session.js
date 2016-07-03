import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {_} from 'meteor/underscore';
import Session from '../components/session.js';

export const composerState = ({context, clearSelection, questions}, onData) => {
  const {LocalState} = context();
  const currentQuestionSeq = LocalState.get('SELECT_QUESTION') || 0;
  // TODO: Change underscore by lodash or rambda
  const currentQuestion = _.findWhere(questions, {questionSeq: currentQuestionSeq});
  onData(null, {currentQuestion});
  return clearSelection;
};

export const composer = ({context, clearSelection, sessionId}, onData) => {
  const {Meteor, Collections, LoginState} = context();
  // TODO: Check meteor_stubs to question.list publication
  if (Meteor.subscribe('sessions.single.composite', sessionId).ready()) {
    const session = Collections.Sessions.findOne(sessionId);
    if (session && session.classId) {
      const classItem = Collections.Classes.findOne(session.classId);
      if (classItem && classItem.isPublic || LoginState.signedUp()) {
        const questions = Collections.Questions.find({classId: classItem._id}).fetch();
        const questionsCount = questions.length;
        onData(null, {questionsCount, questions});
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
  } // TODO: Else code, two posibilities: 1. loading page, 2. Insert code again
};

export const depsMapper = (context, actions) => ({
  select: actions.session.select,
  clearSelection: actions.session.clearSelection,
  context: () => context
});

export default composeAll(
  composeWithTracker(composerState),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Session);
