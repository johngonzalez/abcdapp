import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import LeaderBoard from '../components/leaderBoard';
import {
  allPass, filter, propEq, prop, map,
  compose, curry, __, project, flatten, groupBy
} from 'ramda';

export const composer = ({context, questions}, onData) => {
  const {Collections} = context();
  const responses = Collections.Responses.find().fetch();

  // Helper function
  // TODO: Instead userId send usedName
  const usersWithGoodQuestion = curry((q, rs) =>
    compose(
      project([ 'questionId','owner' ]),
      filter(allPass([
        propEq( 'questionId', prop('_id', q) ),
        propEq( 'selected', prop('response', q) )
      ]))
    )(rs)
  );
  // console.log(usersWithGoodQuestion(questions[1], responses));
  const usersWithGoodQuestions = map(usersWithGoodQuestion(__, responses))(questions);
  const goodQuestionByUser = compose(
    groupBy(prop('owner')),
    flatten
  )(usersWithGoodQuestions);
  onData(null, {goodQuestionByUser});
};

export const depsMapper = (context) => ({context: () => context});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LeaderBoard);
