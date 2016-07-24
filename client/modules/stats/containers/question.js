import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Question from '../components/question';

export const composer = ({context, sessionId, questionId}, onData) => {
  const {Collections} = context();
  const question = Collections.Questions.findOne(questionId);
  onData(null, {question});
};

export const depsMapper = context => ({context: () => context});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Question);
