import QuestionList from '../components/questionsList';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, classId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('questions.list', classId).ready()) {
    const questions = Collections.Questions.find({classId}).fetch();
    onData(null, {questions});
  } else {
    const questions = Collections.Questions.find({classId}).fetch();
    if (questions) {
      onData(null, {questions});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(QuestionList);
