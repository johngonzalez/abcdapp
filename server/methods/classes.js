import {Classes} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'class.create'(_id, className) {
      check(className, String);
      check(_id, String);
      const createdAt = new Date();
      const sessionClass = {_id, className, createdAt};
      Meteor._sleepForMs(5000);
      Classes.insert(sessionClass);
    },
    'class.update'(classId, newClassName) {
      check(newClassName, String);
      check(classId, String);
      Classes.update(classId, {
        $set: {className: newClassName}
      });
    }
  });
}
