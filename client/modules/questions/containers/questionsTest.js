import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import QuestionsTest from '../components/questionsTest';

export const composer = ({context, sessionId, classId}, onData) => {
  const {Meteor, Collections} = context();
  // TODO: Check meteor_stubs to question.list publication
  if (Meteor.subscribe('questionsResponses', sessionId, classId).ready()) {
    const questions = Collections.Questions.find({classId}).fetch();
    onData(null, {questions});
  } else {
    onData();
  }
};

export const depsMapper = (context) => ({context: () => context});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuestionsTest);
