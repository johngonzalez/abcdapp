import {Questions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('questions.list', function () {
    return Questions.find({});
  });
}
