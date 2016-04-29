import Session from '../components/session.js';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearSelection, classId}, onData) => {
  const {LocalState, Meteor, Collections} = context();

  if (Meteor.subscribe('questions.list', classId).ready()) {
    const questionsCount = Collections.Questions.find({classId}).count();
    const currentQuestionId = LocalState.get('SELECT_QUESTION') || 1;
    onData(null, {questionsCount, currentQuestionId});
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
