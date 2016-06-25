import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import MainLayout from '../components/main_layout';
// TODO: authComposer should be imported with a package
import {authComposer} from '../../../../client/modules/users/containers/auth';
import redirectAccordingRole from '../libs/redirectAccordingRole';

export const composer = ({context, content, mainRoleUser, loggedIn}, onData) => {
  const {FlowRouter, Meteor, Roles} = context();
  if (loggedIn && FlowRouter.current().path === '/') {
    redirectAccordingRole(FlowRouter, Meteor, Roles);
  }
  const nologging = content && content().props ? content().props.nologging : null;
  onData(null, {nologging});
};
export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps()
)(MainLayout);
