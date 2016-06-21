import React from 'react';
import {mount} from 'react-mounter';
import Login from '../users/containers/Login.js';
import MainLayout from './containers/main_layout.js';
import Session from '../questions/containers/session';
import ClassList from '../questions/containers/classList';
import ClassItem from '../questions/containers/classItem';
import TeachersList from '../users/containers/teachersList';
import AcceptInvitation from '../users/containers/acceptInvitation';

export default function (injectDeps, {FlowRouter, Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Core Routes
  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ClassList />)
      });
    }
  });

  // Users Routes
  // TODO: Remove login route
  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/');
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
