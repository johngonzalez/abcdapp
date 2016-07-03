import React from 'react';
import {Pagination} from 'react-bootstrap';
import Question from '../components/question';
import LoginUser from '../../users/containers/loginUser';

class Sessions extends React.Component {
  static propTypes() {
    return {
      select: this.propTypes.func,
      currentQuestion: this.propTypes.object.isRequired,
      questionsCount: this.propTypes.number.isRequired,
      sessionId: this.propTypes.string.isRequired,
      error: this.propTypes.string
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
    const {error, questionsCount, currentQuestion, sessionId} = this.props;
    return (
      !error ?
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
          <p>No hay preguntas aún</p> :
        <div>
          <p>{error}</p>
          <LoginUser />
        </div>
    );
  }
}

export default Sessions;
