import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'class.create'(_id, className, durationQuestion, isPublic) {
      check(_id, String);
      check(className, String);
      check(durationQuestion, Number);
      check(isPublic, Boolean);
      const saving = true;
      const createdAt = new Date();
      const sessionClass = {_id, className, createdAt, durationQuestion, saving, isPublic};
      Collections.Classes.insert(sessionClass);
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
