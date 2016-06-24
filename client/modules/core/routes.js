import {Accounts} from 'meteor/accounts-base';
import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './containers/main_layout.js';
import Session from '../questions/containers/session';
import ClassList from '../questions/containers/classList';
import ClassItem from '../questions/containers/classItem';
import TeachersList from '../users/containers/teachersInvitationsNav';
import AcceptInvitation from '../users/containers/acceptInvitation';

export default function (injectDeps, {FlowRouter, Meteor, Roles}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const redirectAccordingRole = () => {
    const mainRoleUser = Roles.getRolesForUser(Meteor.userId())[0];
    switch (mainRoleUser) {
      case 'teacher':
        FlowRouter.go('/classes');
        break;
      case 'admin':
        FlowRouter.go('/teachers');
        break;
      default:
        FlowRouter.go('/classes');
    }
  };
  Accounts.onLogin(() => {
    redirectAccordingRole();
  });

  // Core Routes
  FlowRouter.route('/', {
    name: 'home',
    action() {
      redirectAccordingRole();
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
  FlowRouter.route('/question/:classId', {
    name: 'sesssion.show',
    action({classId}) {
      mount(MainLayoutCtx, {
        content: () => (<Session classId={classId} />)
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
}
