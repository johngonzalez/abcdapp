import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';

class SessionRegisterCode extends React.Component {
  static propTypes() {
    return {
      insert: React.propTypes.func.isrequired
    };
  }
  constructor(props) {
    super(props);
    this.insertCode = this.insertCode.bind(this);
    this.insert = props.insert;
  }
  insertCode(e) {
    e.preventDefault();
    const {code} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.insert(find(code).value);
  }
  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>
            Ingresa el código de la sesión de clase dada por tu profesor
          </ControlLabel>
          <FormControl type="text" placeholder="Enter code" ref="code" />
        </FormGroup>
        <Button type="submit" onClick={this.insertCode}>Ingresa</Button>
      </form>
    );
  }
}

export default SessionRegisterCode;
