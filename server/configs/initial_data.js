import {Questions} from '../../lib/collections';

export default function () {
  if (!Questions.findOne()) {
    for (let i = 1; i <= 10; i++) {
      const questionId = i;
      const answer = i % 4;
      Questions.insert({questionId, answer});
    }
  }
}
