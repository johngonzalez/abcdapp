import {Sessions, Responses} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'response.select'(_id, sessionId, questionId, selected) {
      check(_id, String);
      check(sessionId, String);
      check(questionId, String);
      check(selected, Number);
      const owner = this.userId;
      const session = Sessions.findOne({_id: sessionId, students: { $in: [ owner ] }});
      if (session && !session.isFinished) {
        const createdAt = new Date();
        const response = {sessionId, questionId, selected, createdAt, owner};
        Meteor._sleepForMs(1000);
        Responses.upsert(_id, { $set: response });
      } else {
        throw new Meteor.Error(
          'reponse.select.notAutherized',
          'You are not authorized for answer questions in this class',
          'You are not authorized for answer questions in this class');
      }
    }
  });
}
