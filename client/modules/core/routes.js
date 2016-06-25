import {Accounts} from 'meteor/accounts-base';
import React from 'react';
import {mount} from 'react-mounter';
import ClassItem from '../questions/containers/classItem';
import ClassList from '../questions/containers/classList';
import Session from '../questions/containers/session';
import AcceptInvitation from '../users/containers/acceptInvitation';
import SessionRegister from '../questions/containers/sessionRegister';
import TeachersList from '../users/containers/teachersInvitationsNav';
import MainLayout from './containers/main_layout.js';
import redirectAccordingRole from './libs/redirectAccordingRole';

export default function (injectDeps, {FlowRouter, Meteor, Roles}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  Accounts.onLogin(() => {
    redirectAccordingRole(FlowRouter, Meteor, Roles);
  });

  // Core Routes
  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx);
    }
  });

  FlowRouter.route('/invite/:token', {
    name: 'invitation.accept',
    action({token}) {
      mount(MainLayoutCtx, {
        content: () => (<AcceptInvitation nologging token={token} />)
      });
    }
  });

  const authenticatedRoutes = FlowRouter.group({
    name: 'authenticated',
  });

  authenticatedRoutes.route( '/teachers', {
    name: 'users',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<TeachersList />)
      });
    }
  });

  // Response Routes
  FlowRouter.route('/session/:sessionId', {
    name: 'session.show',
    action({sessionId}) {
      mount(MainLayoutCtx, {
        content: () => (<Session sessionId={sessionId} />)
      });
    }
  });

  // Class Routes
  FlowRouter.route('/classes', {
    name: 'classes.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ClassList />)
      });
    }
  });
  FlowRouter.route('/class/:classId', {
    name: 'class.single',
    action({classId}) {
      mount(MainLayoutCtx, {
        content: () => (<ClassItem classId={classId} />)
      });
    }
  });
  FlowRouter.route('/code', {
    name: 'session.register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SessionRegister />)
      });
    }
  });
}
