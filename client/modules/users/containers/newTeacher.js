import NewTeacher from '../components/newTeacher';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearNewTeacherState}, onData) => {
  const {LocalState} = context();
  const showModal = LocalState.get('SHOW_MODAL');
  const error = LocalState.get('SEND_INVITATION_ERROR');
  onData(null, {showModal, error});

  // clearErrors when unmounting the component
  return clearNewTeacherState;
};

export const depsMapper = (context, actions) => ({
  openModal: actions.newTeacher.openModal,
  closeModal: actions.newTeacher.closeModal,
  clearNewTeacherState: actions.newTeacher.clearNewTeacherState,
  create: actions.newTeacher.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewTeacher);
