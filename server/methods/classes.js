import {Classes} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'class.create'(_id, className, durationQuestion) {
      check(_id, String);
      check(className, String);
      check(durationQuestion, Number);
      const createdAt = new Date();
      const sessionClass = {_id, className, createdAt, durationQuestion};
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
