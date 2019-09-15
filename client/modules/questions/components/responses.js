import React from 'react';
import {Button} from 'react-bootstrap';

class Response extends React.Component {
  static propTypes() {
    return {
      error: this.propTypes.string,
      select: this.propTypes.func.isRequired,
      questionId: this.propTypes.string.isRequired,
      sessionId: this.propTypes.string.isRequired,
      lastResponse: this.propTypes.object
    };
  }
  constructor(props) {
    super(props);
    this.select = props.select;
    this.isSelected = this.isSelected.bind(this);
    this.isSaving = this.isSaving.bind(this);
    this.selectResponse = this.selectResponse.bind(this);
  }
  isSelected(i) {
    const {selected: selected} = this.props.lastResponse || {};
    return selected !== undefined && selected === i;
  }
  isSaving(i) {
    const {selected: selected, saving: saving} = this.props.lastResponse || {};
    return selected !== undefined && selected === i && saving;
  }
  selectResponse(e) {
    e.preventDefault();
    const {_id: _id} = this.props.lastResponse || {};
    const {sessionId, questionId} = this.props;
    const selected = parseInt(e.target.value, 10);
    this.select(_id, sessionId, questionId, selected);
  }
  render() {
    const {error} = this.props;
    return (
      <div>
        <p style={{color: 'red'}}>{error}</p> { /* TODO: If isn't auth redirect to login */}
        {
          [ 0, 1, 2, 3 ].map( i => (
            <Button
              key={i}
              bsSize="large"
              bsStyle={this.isSelected(i) ? 'primary' : 'default'}
              block
              value={i}
              onClick={this.selectResponse}
            >
              <span>
                {
                  this.isSaving(i) ?
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
