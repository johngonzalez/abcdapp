import {questionsList, questionsResponsesList} from './questions';
import classes from './classes';
import sessions from './sessions';
import users from './users';

export default function () {
  questionsList();
  questionsResponsesList();
  classes();
  sessions();
  users();
}
