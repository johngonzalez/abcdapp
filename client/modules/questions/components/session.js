import React from 'react';
import {Pagination} from 'react-bootstrap';
import Question from '../components/question';

class Sessions extends React.Component {
  static propTypes() {
    return {
      select: this.propTypes.func,
      currentQuestion: this.propTypes.object.isRequired,
      questionsCount: this.propTypes.number.isRequired,
      sessionId: this.propTypes.string.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.select = props.select;
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(e) {
    this.select(e);
  }
  render() {
    const {questionsCount, currentQuestion, sessionId} = this.props;
    return (
      currentQuestion ?
        <div>
          <div className="text-center">
              <Pagination
                bsSize="big"
                activePage={currentQuestion.questionSeq + 1}
                items={questionsCount}
                onSelect={this.handleSelect}
              />
          </div>
        <Question sessionId={sessionId} questionId={currentQuestion._id} />
      </div> :
      <p>No hay preguntas aún</p>
    );
  }
}

export default Sessions;
