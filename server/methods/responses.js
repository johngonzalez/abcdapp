import {Responses} from '../../lib/collections';
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
      if (!owner) {
        throw new Meteor.Error('not-authorized');
      }
      const createdAt = new Date();
      const response = {sessionId, questionId, selected, createdAt, owner};
      Meteor._sleepForMs(5000);
      Responses.upsert(_id, { $set: response });
    }
  });
}
