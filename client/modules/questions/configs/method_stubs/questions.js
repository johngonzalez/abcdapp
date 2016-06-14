import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
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

      check(_id, String);
      check(questionName, String);
      check(classId, String);
      check(response, Number);
      check(component, String);
      check(competence, String);
      check(imageUrl, String);
      check(questionSeq, Number);

      const saving = true;
      const createdAt = new Date();

      Collections.Questions.insert({
        _id,
        questionSeq,
        questionName,
        imageUrl,
        saving,
        createdAt,
        classId,
        response,
        component,
        competence
      });
    }
  });
}
