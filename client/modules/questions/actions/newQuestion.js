export default {
  openModal({LocalState}) {
    LocalState.set('SHOW_QUESTION_MODAL', true);
  },
  closeModal({LocalState}) {
    LocalState.set('SHOW_QUESTION_MODAL', false);
  },
  create(
    {Meteor, LocalState, FlowRouter, Upload},
    questionName,
    file,
    classId,
    response,
    component,
    competence) {
    if (!questionName) {
      return LocalState.set('CREATE_QUESTION_ERROR', 'Question name is required.');
    }
    if (!file) {
      return LocalState.set('CREATE_QUESTION_ERROR', 'Image file is required.');
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

    const uploader = Upload('uploadToS3');
    uploader.send(file, function (error, imageUrl) {
      if (error) {
        LocalState.set('CREATE_QUESTION_ERROR', error);
      }
      const id = Meteor.uuid();
      // After that image is upload to S3, save question
      Meteor.call('question.create',
        id,
        questionName,
        imageUrl,
        classId,
        response,
        component,
        competence,
        (err) => {
          if (err) {
            return LocalState.set('CREATE_QUESTION_ERROR', err.message);
          }
        });
    });
    LocalState.set('CREATE_QUESTION_ERROR', null);
    LocalState.set('SHOW_QUESTION_MODAL', false);
  },
  clearNewQuestionState({LocalState}) {
    LocalState.set('SHOW_QUESTION_MODAL', null);
    LocalState.set('CREATE_QUESTION_ERROR', null);
    return;
  }
};
