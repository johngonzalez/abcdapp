import {compose} from 'mantra-core';
import Question from '../components/question';

export const composer = ({questionId}, onData) => {
  onData(null, {questionId});
};

export default compose(composer)(Question);
