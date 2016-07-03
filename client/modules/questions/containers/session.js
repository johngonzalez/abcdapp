import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {_} from 'meteor/underscore';
import Session from '../components/session.js';

export const composer = ({context, clearSelection, sessionId}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  // TODO: Check meteor_stubs to question.list publication
  if (Meteor.subscribe('sessions.single', sessionId).ready()) {
    const session = Collections.Sessions.findOne(sessionId);
    if (session) {
      const classId = session.classId;
      if (Meteor.subscribe('classes.single', classId).ready()) {
        const classItem = Collections.Classes.findOne({_id: classId});
        if (classItem.isPublic || Meteor.userId()) {
          if (Meteor.subscribe('questionsResponses.list', classId, sessionId).ready()) {
            // TODO: Not publish response key to any user
            const questions = Collections.Questions.find({classId}).fetch();
            const questionsCount = questions.length;
            // TODO: Each time that is update current question is executed all?
            const currentQuestionSeq = LocalState.get('SELECT_QUESTION') || 0;
            // TODO: Change underscore by lodash or rambda
            const currentQuestion = _.findWhere(questions, {questionSeq: currentQuestionSeq});
            onData(null, {questionsCount, currentQuestion});
          } else {
            onData(null, null);
          }
        }
      }
    }
    // TODO: Else code, two posibilities: 1. loading page, 2. Insert code again
  }
  // clearSelection when unmounting the component
  return clearSelection;
};

export const depsMapper = (context, actions) => ({
  select: actions.session.select,
  clearSelection: actions.session.clearSelection,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Session);
