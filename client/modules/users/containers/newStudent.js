import NewStudent from '../components/newStudent';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearNewStudentState}, onData) => {
  const {LocalState} = context();
  const showModal = LocalState.get('SHOW_MODAL');
  const error = LocalState.get('SEND_INVITATION_ERROR');
  onData(null, {showModal, error});

  // clearErrors when unmounting the component
  return clearNewStudentState;
};

export const depsMapper = (context, actions) => ({
  openModal: actions.newStudent.openModal,
  closeModal: actions.newStudent.closeModal,
  clearNewStudentState: actions.newStudent.clearNewStudentState,
  create: actions.newStudent.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewStudent);
