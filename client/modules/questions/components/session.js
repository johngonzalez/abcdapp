import React from 'react';
import {Pagination, Panel} from 'react-bootstrap';
import Question from '../components/question';
import LoginUser from '../../users/containers/loginUser';
import SessionRegister from '../containers/sessionRegister';

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
        error.type === 'SESSION_PRIVATE' ?
          <div>
            <p style={{color: 'red'}}>{error.message}</p>
            <Panel><LoginUser /></Panel>
          </div> :
          error.type === 'SESSION_NON_EXISTS' ?
          <div>
            <p style={{color: 'red'}}>{error.message}</p>
            <SessionRegister />
          </div> :
          null
    );
  }
}

export default Sessions;
