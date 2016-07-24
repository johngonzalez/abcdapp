import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import QuestionsTest from '../components/questionsTest';

export const composer = ({context, sessionId, classId}, onData) => {
  const {Collections} = context();
  // TODO: Check meteor_stubs to question.list publication
  const questions = Collections.Questions.find({classId}).fetch();
  onData(null, {questions});
};

export const depsMapper = context => ({context: () => context});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuestionsTest);
