import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {_} from 'meteor/underscore';
import QuestionsTest from '../components/questionsTest';

export const composerState = ({context, clearSelection, questions}, onData) => {
  const {LocalState} = context();
  const currentQuestionSeq = LocalState.get('SELECT_QUESTION') || 0;
  // TODO: Change underscore by lodash or rambda
  const currentQuestion = _.findWhere(questions, {questionSeq: currentQuestionSeq});
  onData(null, {currentQuestion});
  return clearSelection;
};

export const composer = ({context, clearSelection, sessionId, classId}, onData) => {
  const {Meteor, Collections} = context();
  // TODO: Check meteor_stubs to question.list publication
  if (Meteor.subscribe('questionsResponses', sessionId, classId).ready()) {
    const questions = Collections.Questions.find({classId}).fetch();
    const questionsCount = questions.length;
    onData(null, {questionsCount, questions});
  } else {
    onData();
  }// TODO: Else code, two posibilities: 1. loading page, 2. Insert code again
};

export const depsMapper = (context, actions) => ({
  select: actions.questionsTest.select,
  clearSelection: actions.questionsTest.clearSelection,
  context: () => context
});

export default composeAll(
  composeWithTracker(composerState),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuestionsTest);
