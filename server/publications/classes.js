import {Classes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('classes.list', function () {
    return Classes.find({});
  });

  Meteor.publish('classes.single', function (classId) {
    check(classId, String);
    const selector = {_id: classId};
    const options = {limit: 1};
    return Classes.find(selector, options);
  });
}
