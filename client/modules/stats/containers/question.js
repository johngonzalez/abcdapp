import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Question from '../components/question';
import {propMerge, objToColl, sortByOr} from '../libs/helpers';
import {propOr, find, propEq, values, prop, groupBy, pluck, map, compose} from 'ramda';

export const composer = ({context, sessionId, questionId}, onData) => {
  const {Collections, Meteor} = context();
  const question = Collections.Questions.findOne(questionId);
  const responses = Collections.Responses.find({questionId}).fetch();
  const users = Meteor.users.find().fetch();
  const userId = Meteor.userId();

  // Helper function
  const merge = compose(
    values,
    propMerge('_id', 'owner')
  );

  // Helper function
  const findByAndProp = compose(
    propOr(-1, 'selected'),
    find(propEq('owner', userId))
  );

  // Helper function
  const groupSelected = compose(
    sortByOr([], 'students', 'selected', [ '0', '1', '2', '3' ]),
    objToColl('selected', 'students'),
    map(pluck('displayName')),
    groupBy(prop('selected'))
  );

  const responsesWithUsers = merge(users, responses);
  console.log(responsesWithUsers);
  const ownSelected = findByAndProp(responsesWithUsers);
  console.log(ownSelected);
  const responsesGroup = groupSelected(responsesWithUsers);

  onData(null, {question, ownSelected, responsesGroup});
};

export const depsMapper = context => ({context: () => context});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Question);
