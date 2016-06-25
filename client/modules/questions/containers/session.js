import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {_} from 'meteor/underscore';
import Session from '../components/session.js';

export const composer = ({context, clearSelection, sessionId}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const _id = sessionId;
  // TODO: Check meteor_stubs to question.list publication
  if (Meteor.subscribe('sessions.single', _id).ready()) {
    const session = Collections.Sessions.findOne({_id});
    if (session) {
      const classId = session.classId;
      if (Meteor.subscribe('questionsResponses.list', classId).ready()) {
        // TODO: Not publish response key to any user
        const questions = Collections.Questions.find({classId}).fetch();
        const questionsCount = questions.length;
        const currentQuestionSeq = LocalState.get('SELECT_QUESTION') || 0;
        // TODO: Change underscore by lodash or rambda
        const currentQuestion = _.findWhere(questions, {questionSeq: currentQuestionSeq});
        onData(null, {classId, questionsCount, currentQuestion});
      } else {
        onData(null, null);
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
