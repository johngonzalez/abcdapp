import Responses from '../components/responses.js';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors, questionId}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('SELECT_RESPONSE_ERROR');
  onData(null, {error, questionId});

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
