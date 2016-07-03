import React from 'react';
import {Button} from 'react-bootstrap';

class Response extends React.Component {
  static propTypes() {
    return {
      select: this.propTypes.func,
      questionId: this.propTypes.string,
      sessionId: this.propTypes.string,
      lastResponse: this.propTypes.object
    };
  }
  constructor(props) {
    super(props);
    this.selectResponse = this.selectResponse.bind(this);
    this.select = props.select;
    this.questionId = props.questionId;
  }
  isSelected(i) {
    const {lastResponse} = this;
    const id = lastResponse ? lastResponse.responseId : null;
    return id !== null && id === i;
  }
  isSaving(i) {
    const {lastResponse} = this;
    const id = lastResponse ? lastResponse.responseId : null;
    const saving = lastResponse ? lastResponse.saving : null;
    return id !== null && id === i && saving;
  }
  selectResponse(e) {
    e.preventDefault();
    const {questionId, sessionId} = this.props;
    const responseId = parseInt(e.target.value, 10);
    this.select(sessionId, questionId, responseId);
  }
  render() {
    const isSelected = this.isSelected.bind(this.props);
    const isSaving = this.isSaving.bind(this.props);
    return (
      <div>
        {
          [ 0, 1, 2, 3 ].map( i => (
            <Button
              key={i}
              bsSize="large"
              bsStyle={isSelected(i) ? 'primary' : 'default'}
              block
              value={i}
              onClick={this.selectResponse}
            >
              <span>
                {
                  isSaving(i) ?
                  ' saving...' :
                  String.fromCharCode(97 + i)
                }
              </span>
            </Button>
          ))
        }
      </div>
    );
  }
}

export default Response;
