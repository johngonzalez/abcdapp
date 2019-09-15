import ClassItemTitle from '../components/classItemTitle';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearState, classId}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('UPDATE_TITLE_ERROR');
  const isEdit = LocalState.get('EDIT_TITLE');
  // TODO: Make method stub to optimistic updates
  onData(null, {error, isEdit});
  return clearState;
};

export const depsMapper = (context, actions) => ({
  updateTitle: actions.classItemTitle.updateTitle,
  toggleEdit: actions.classItemTitle.toggleEdit,
  clearState: actions.classItemTitle.clearState,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ClassItemTitle);
