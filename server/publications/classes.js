import {Classes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('classes.list', function () {
    return Classes.find({});
  });
}
