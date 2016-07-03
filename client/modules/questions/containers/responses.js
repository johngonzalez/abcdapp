import Responses from '../components/responses.js';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors, questionId}, onData) => {
  const {LocalState, Collections} = context();
  const error = LocalState.get('SELECT_RESPONSE_ERROR');
  const lastResponse = Collections.Responses.findOne({questionId});
  if (lastResponse) {
    onData(null, {error, questionId, lastResponse});
  } else {
    onData(null, {error, questionId});
  }
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
