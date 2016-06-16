import {Sessions} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('sessions.list', function () {
    return Sessions.find({});
  });
}
