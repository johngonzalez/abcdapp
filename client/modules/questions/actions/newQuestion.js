export default {
  openModal({LocalState}) {
    LocalState.set('SHOW_QUESTION_MODAL', true);
  },
  closeModal({LocalState}) {
    LocalState.set('SHOW_QUESTION_MODAL', false);
  },
  create(
    {Meteor, LocalState, FlowRouter},
    questionName,
    classId,
    response,
    component,
    competence) {
    if (!questionName) {
      return LocalState.set('CREATE_QUESTION_ERROR', 'Question name is required.');
    }
    if (response === undefined || response === null) {
      return LocalState.set('CREATE_QUESTION_ERROR', 'Correct answer is required.');
    }
    if (!component) {
      return LocalState.set('CREATE_QUESTION_ERROR', 'Component is required.');
    }
    if (!competence) {
      return LocalState.set('CREATE_QUESTION_ERROR', 'Competence is required.');
    }
    LocalState.set('CREATE_QUESTION_ERROR', null);
    const id = Meteor.uuid();
    Meteor.call('question.create',
      id,
      questionName,
      classId,
      response,
      component,
      competence,
      (err) => {
        if (err) {
          return LocalState.set('CREATE_QUESTION_ERROR', err.message);
        }
      });
    LocalState.set('SHOW_QUESTION_MODAL', false);
  },
  clearNewQuestionState({LocalState}) {
    LocalState.set('SHOW_QUESTION_MODAL', null);
    LocalState.set('CREATE_QUESTION_ERROR', null);
    return;
  }
};
