import NewQuestion from '../components/newQuestion';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearNewQuestionState}, onData) => {
  const {LocalState} = context();
  const showModal = LocalState.get('SHOW_QUESTION_MODAL');
  const error = LocalState.get('CREATE_QUESTION_ERROR');
  onData(null, {showModal, error});

  // clearErrors when unmounting the component
  return clearNewQuestionState;
};

export const depsMapper = (context, actions) => ({
  openModal: actions.newQuestion.openModal,
  closeModal: actions.newQuestion.closeModal,
  clearNewQuestionState: actions.newQuestion.clearNewQuestionState,
  create: actions.newQuestion.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewQuestion);
