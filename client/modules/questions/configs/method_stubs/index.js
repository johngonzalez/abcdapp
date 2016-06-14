import classes from './classes';
import questions from './questions';
import responses from './responses';

export default function (context) {
  classes(context);
  questions(context);
  responses(context);
}
