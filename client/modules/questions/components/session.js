import React from 'react';
import {Pagination} from 'react-bootstrap';
import Question from '../components/question';

class Sessions extends React.Component {
  static propTypes() {
    return {
      select: this.propTypes.func,
      currentQuestionId: this.propTypes.number.isRequired,
      questionsCount: this.propTypes.number.isRequired
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
    const {currentQuestionId, questionsCount} = this.props;
    return (
        <div>
          <div className="text-center">
            <Pagination
              bsSize="big"
              activePage={currentQuestionId}
              items={questionsCount}
              onSelect={this.handleSelect}
            />
          </div>
        <Question questionId={currentQuestionId} />
      </div>
    );
  }
}

export default Sessions;
