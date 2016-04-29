import React from 'react';
import {mount} from 'react-mounter';
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';
import MainLayout from './components/main_layout.js';
import Session from '../questions/containers/session';
import ClassList from '../questions/containers/classList';
import ClassItem from '../questions/containers/classItem';


export default function (injectDeps, {FlowRouter, Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Core Routes
  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<p>Hello world</p>)
      });
    }
  });

  // Users Routes
  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });
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
