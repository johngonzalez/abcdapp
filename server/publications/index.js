import {questionsList, questionsResponsesList} from './questions';
import classes from './classes';
import sessions from './sessions';

export default function () {
  questionsList();
  questionsResponsesList();
  classes();
  sessions();
}
