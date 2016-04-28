import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Panel, FormControl, FormGroup, Button} from 'react-bootstrap';

class NewUser extends React.Component {
  static propTypes() {
    return {
      create: this.propTypes.func,
      error: this.propTypes.string
    };
  }
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
    this.create = props.create;
  }
  createUser(e) {
    e.preventDefault();
    const {email, password} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.create(find(email).value, find(password).value);
    find(email).value = '';
    find(password).value = '';
  }
  render() {
    const {error} = this.props;
    return (
			<Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Register</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <FormGroup>
              <FormControl ref="email" type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <FormControl ref="password" type="password" placeholder="Password" />
            </FormGroup>
            <Button
              bsStyle="default"
              onClick={this.createUser}
              type="submit"
            > Entrar
            </Button>
          </form>
        </Panel>
      </Col>
		);
  }
}

export default NewUser;
