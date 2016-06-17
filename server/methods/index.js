import responses from './responses';
import classes from './classes';
import questions from './questions';
import sessions from './sessions';
import users from './users';

export default function () {
  responses();
  classes();
  questions();
  sessions();
  users();
}
