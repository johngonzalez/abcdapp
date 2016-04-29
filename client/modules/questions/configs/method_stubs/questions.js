import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'question.create'(_id, questionName, classId, response, component, competence) {
      check(_id, String);
      check(questionName, String);
      check(classId, String);
      check(response, Number);
      check(component, String);
      check(competence, String);
      const saving = true;
      const createdAt = new Date();
      Collections.Questions.insert({
        _id, questionName, saving, createdAt, classId, response, component, competence
      });
    }
  });
}
