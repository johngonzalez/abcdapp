import ClassItem from '../components/classItem';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, classId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('classes.single', classId).ready()) {
    const classItem = Collections.Classes.findOne(classId);
    onData(null, {classItem});
  } else {
    const classItem = Collections.Classes.findOne(classId);
    if (classItem) {
      onData(null, {classItem});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ClassItem);
