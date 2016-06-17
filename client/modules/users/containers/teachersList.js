import TeachersList from '../components/teachersList';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {adminComposer} from './auth';

export default composeAll(
  composeWithTracker(adminComposer),
  useDeps()
)(TeachersList);
