import {Questions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

// TODO: Make better validations
// TODO: add owner
export default function () {
  Meteor.methods({
    'question.create'(
      _id,
      questionSeq,
      questionName,
      imageUrl,
      classId,
      response,
      component,
      competence) {

      check(questionName, String);
      check(_id, String);
      check(classId, String);
      check(response, Number);
      check(component, String);
      check(competence, String);
      check(imageUrl, String);
      check(questionSeq, Number);

      const createdAt = new Date();
      const question = {
        _id,
        questionSeq,
        questionName,
        imageUrl,
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
