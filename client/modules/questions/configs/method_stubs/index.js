import classes from './classes';
import questions from './questions';
import responses from './responses';
import sessions from './sessions';

export default function (context) {
  classes(context);
  questions(context);
  responses(context);
  sessions(context);
}
