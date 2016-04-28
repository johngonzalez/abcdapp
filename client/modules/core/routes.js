import React from 'react';
import {mount} from 'react-mounter';
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';
import MainLayout from './components/main_layout.js';
import Session from '../questions/containers/session';
import NewClass from '../questions/containers/newClass';


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
  FlowRouter.route('/question', {
    name: 'sesssion.show',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Session />)
      });
    }
  });

  // Class Routes
  FlowRouter.route('/newclass', {
    name: 'class.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewClass />)
      });
    }
  });
}
