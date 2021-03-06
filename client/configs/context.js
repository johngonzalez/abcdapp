import * as Collections from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {Slingshot} from 'meteor/edgee:slingshot';
import {Roles} from 'meteor/alanning:roles';
import {LoginState} from 'meteor/brettle:accounts-login-state';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    Upload: (directive) => new Slingshot.Upload(directive),
    Roles,
    LoginState
  };
}
