import React from 'react';
import {Button} from 'react-bootstrap';

class Response extends React.Component {
  static propTypes() {
    return {
      select: this.propTypes.func,
      questionId: this.propTypes.number
    };
  }
  constructor(props) {
    super(props);
    this.selectResponse = this.selectResponse.bind(this);
    this.select = props.select;
    this.questionId = props.questionId;
  }
  selectResponse(e) {
    e.preventDefault();
    const {questionId} = this.props;
    const responseId = parseInt(e.target.value, 10);
    this.select(questionId, responseId);
  }
  render() {
    // TODO: Remember selection to user
    return (
      <div>
        <Button bsSize="large" block value={0} onClick={this.selectResponse}>a</Button>
        <Button bsSize="large" block value={1} onClick={this.selectResponse}>b</Button>
        <Button bsSize="large" block value={2} onClick={this.selectResponse}>c</Button>
        <Button bsSize="large" block value={3} onClick={this.selectResponse}>d</Button>
      </div>
    );
  }
}

export default Response;
