import NewClass from '../components/newClass';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearNewClassState}, onData) => {
  const {LocalState} = context();
  const showModal = LocalState.get('SHOW_MODAL');
  const error = LocalState.get('CREATE_CLASS_ERROR');
  onData(null, {showModal, error});

  // clearErrors when unmounting the component
  return clearNewClassState;
};

export const depsMapper = (context, actions) => ({
  openModal: actions.newClass.openModal,
  closeModal: actions.newClass.closeModal,
  clearNewClassState: actions.newClass.clearNewClassState,
  create: actions.newClass.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewClass);
