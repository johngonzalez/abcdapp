import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'class.create'(_id, className, durationQuestion) {
      check(_id, String);
      check(className, String);
      check(durationQuestion, Number);
      const saving = true;
      const createdAt = new Date();
      Collections.Classes.insert({
        _id, className, saving, createdAt, durationQuestion
      });
    },
    'class.update'(classId, newClassName) {
      check(newClassName, String);
      check(classId, String);
      Collections.Classes.update(classId, {
        $set: {className: newClassName}
      });
    }
  });
}
