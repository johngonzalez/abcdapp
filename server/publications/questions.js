import {Questions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('questions.list', function () {
    return Questions.find({});
  });
}
