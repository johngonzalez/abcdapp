import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import QuestionsTest from '../components/questionsTest';

export const composer = ({context, sessionId, classId}, onData) => {
  const {Collections} = context();
  // TODO: Check meteor_stubs to question.list publication
  const questions = Collections.Questions.find({classId}).fetch();
  onData(null, {questions});
};

export const composerTab = ({context, clearState}, onData) => {
  const {LocalState, Meteor} = context();
  const userId = Meteor.userId();
  const keyTab = LocalState.get('SELECT_TAB') || 1;
  onData(null, {keyTab, userId});
  return clearState;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  onSelect: actions.questionsTest.onSelect,
  clearState: actions.questionsTest.clearState
});

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(composerTab),
  useDeps(depsMapper)
)(QuestionsTest);
