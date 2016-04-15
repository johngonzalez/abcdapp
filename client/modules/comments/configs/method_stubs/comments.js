import {check} from 'meteor/check';

export default function ({Collections, Meteor}) {
  Meteor.methods({
    'posts.createComment'(_id, postId, text) {
      check(_id, String);
      check(postId, String);
      check(text, String);

      const saving = true;
      const createdAt = new Date();
      const author = 'Me';
      Collections.Comments.insert({
        _id, postId, text, saving, createdAt, author
      });
    }
  });
}
