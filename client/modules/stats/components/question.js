import React from 'react';

const Question = ({question, responsesGroup}) => (
  <div>
    <p>Correcta: {String.fromCharCode(97 + question.response)}</p>
    <hr />
     {
      responsesGroup.map((rg, i) => (
        <div key={i}>{String.fromCharCode(97 + i)}: {rg.length}</div>
      ))
    }
  </div>
);

Question.propTypes = {
  question: React.PropTypes.object.isRequired,
  responsesGroup: React.PropTypes.array.isRequired
};

export default Question;
