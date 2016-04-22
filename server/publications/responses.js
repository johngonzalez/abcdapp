import {Responses} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('posts.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, questionId: 1, responseId: 1},
      sort: {createdAt: -1}
    };

    return Responses.find(selector, options);
  });
}
