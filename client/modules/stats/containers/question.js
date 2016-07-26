import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Question from '../components/question';

export const composer = ({context, sessionId, questionId}, onData) => {
  const {Collections, Meteor} = context();
  const question = Collections.Questions.findOne(questionId);
  const responses = Collections.Responses.find({questionId}).fetch();
  const users = Meteor.users.find().fetch();
  onData(null, {question, responses, users});
};

export const depsMapper = context => ({context: () => context});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Question);
