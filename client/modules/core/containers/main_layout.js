import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import MainLayout from '../components/main_layout';
// TODO: authComposer should be imported with a package
import {authComposer} from '../../../../client/modules/users/containers/auth';

export const composer = ({context}, onData) => {
  onData(null, {});
};
export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps()
)(MainLayout);
