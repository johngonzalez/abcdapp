import {Sessions} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('sessions.list', function () {
    return Sessions.find({});
  });
  Meteor.publish('sessions.single', function (_id) {
    check(_id, String);
    return Sessions.find({_id}, {limit: 1});
  });
}
