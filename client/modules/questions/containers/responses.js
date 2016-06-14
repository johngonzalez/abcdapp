import Responses from '../components/responses.js';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors, questionId}, onData) => {
  const {LocalState, Collections} = context();
  const error = LocalState.get('SELECT_RESPONSE_ERROR');
  const options = {sort: {createdAt: -1}, limit: 1};
  const lastResponse = Collections.Responses.find({questionId}, options).fetch()[0];
  if (lastResponse) {
    onData(null, {error, questionId, lastResponse});
  } else {
    onData(null, {error, questionId});
  }
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  select: actions.responses.select,
  clearErrors: actions.responses.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Responses);
