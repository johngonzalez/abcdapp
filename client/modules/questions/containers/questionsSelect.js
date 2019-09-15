import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {_} from 'meteor/underscore';
import QuestionsSelect from '../components/questionsSelect';

export const composer = ({context, clearSelection, questions}, onData) => {
  const {LocalState} = context();
  const currentQuestionSeq = LocalState.get('SELECT_QUESTION') || 0;
  // TODO: Change underscore by lodash or rambda
  const currentQuestion = _.findWhere(questions, {questionSeq: currentQuestionSeq});
  const questionsCount = questions.length;
  onData(null, {currentQuestion, questionsCount});
  return clearSelection;
};

export const depsMapper = (context, actions) => (
  {context: () => context, ...actions.questionsSelect}
);

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuestionsSelect);
