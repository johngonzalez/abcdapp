import React from 'react';
import {Pagination} from 'react-bootstrap';

const QuestionsSelect = ({currentQuestion, questionsCount, select, children}) => (
  <div className="text-center">
      <Pagination
        bsSize="big"
        activePage={currentQuestion.questionSeq + 1}
        items={questionsCount}
        onSelect={select}
      />
    {
      children ?
      React.cloneElement(children, {questionId: currentQuestion._id}) :
      null
    }
  </div>
);

QuestionsSelect.propTypes = {
  select: React.PropTypes.func.isRequired,
  currentQuestion: React.PropTypes.object.isRequired,
  questionsCount: React.PropTypes.number.isRequired,
  children: React.PropTypes.element
};

export default QuestionsSelect;
