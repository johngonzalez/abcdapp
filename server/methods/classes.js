import {Classes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'class.create'(className) {
      check(className, String);
      const createdAt = new Date();
      const sessionClass = {className, createdAt};
      Classes.insert(sessionClass);
    }
  });
}
