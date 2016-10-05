import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import QuestionsTable from '../components/questionsTable';
import {allPass, filter, propEq, prop, map, compose, curry, __} from 'ramda';

export const composer = ({context, questions}, onData) => {
  const {Collections} = context();
  const responses = Collections.Responses.find().fetch();

  // Helper function
  // TODO: Instead userId send usedName
  const usersWithGoodQuestion = curry((q, rs) =>
    compose(
      map(prop('owner')),
      filter(allPass([
        propEq( 'questionId', prop('_id', q) ),
        propEq( 'selected', prop('response', q) )
      ]))
    )(rs)
  );
  const usersWithGoodQuestions = map(usersWithGoodQuestion(__, responses))(questions);
  onData(null, {usersWithGoodQuestions});
};

export const depsMapper = (context) => ({context: () => context});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuestionsTable);
