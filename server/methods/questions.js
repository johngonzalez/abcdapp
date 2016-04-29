import {Questions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'question.create'(_id, questionName, classId, response, component, competence) {
      check(questionName, String);
      check(_id, String);
      check(classId, String);
      check(response, Number);
      check(component, String);
      check(competence, String);
      const createdAt = new Date();
      const question = {
        _id,
        questionName,
        createdAt,
        classId,
        response,
        component,
        competence
      };
      Meteor._sleepForMs(5000);
      Questions.insert(question);
    }
  });
}
