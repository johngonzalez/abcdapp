import React from 'react';
import NewQuestion from '../containers/newQuestion';
import {Thumbnail, Col, Row} from 'react-bootstrap';

// TODO: Create progress bar to upload file
const QuestionsList = ({questions, classId}) => (
  <div>
    <Row>
      {
        questions ?
          questions.map(q => (
            <Col xs={12} md={4} key={q._id}>
              <Thumbnail src={q.imageUrl} alt="imagen">
                <h3>{q.questionName}</h3>
                <p>{q.saving ? <b> saving...</b> : null}</p>
              </Thumbnail>
            </Col>
            )) :
            null
      }
      <Col xs={12} md={4}>
        <Thumbnail>
          <NewQuestion
            questionSeq={questions ? questions.length : 0}
            classId={classId}
          />
        </Thumbnail>
      </Col>
    </Row>
  </div>
);

QuestionsList.propTypes = {
  questions: React.PropTypes.array,
  classId: React.PropTypes.string.isRequired
};

export default QuestionsList;
