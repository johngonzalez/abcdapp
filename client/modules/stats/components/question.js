import React from 'react';

const QuestionsMain = ({question, responses, users}) => (
  <div>
    <p>id: {question._id}</p>
    <p>seq: {question.questionSeq}</p>
    <p>key: {question.response}</p>
    {
      responses.map(r =>
        <p key={r._id}>{r.selected}-{r.owner}</p>
      )
    }
    <hr />
    {
      users.map(u =>
        <p key={u._id}>{u.displayName}</p>
      )
    }
  </div>
);

QuestionsMain.propTypes = {
  question: React.PropTypes.object.isRequired,
  responses: React.PropTypes.array.isRequired,
  users: React.PropTypes.array.isRequired
};

export default QuestionsMain;
