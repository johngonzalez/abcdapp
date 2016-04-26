import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Panel, FormControl, FormGroup, Button} from 'react-bootstrap';

class Login extends React.Component {
  static propTypes() {
    return {
      loginUser: this.propTypes.func,
      error: this.propTypes.string
    };
  }
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.loginUser = props.loginUser;
    this.error = props.error;
  }
  login(e) {
    e.preventDefault();
    const {email, password} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.loginUser(find(email).value, find(password).value);
    find(email).value = '';
    find(password).value = '';
  }
  render() {
    return (
			<Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Entra</h1>
          {this.error ? <p style={{color: 'red'}}>{this.error}</p> : null}
          <form>
            <FormGroup>
              <FormControl ref="email" type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <FormControl ref="password" type="password" placeholder="Password" />
            </FormGroup>
            <Button
              bsStyle="default"
              onClick={this.login}
              type="submit"
            > Entrar
            </Button>
          </form>
        </Panel>
      </Col>
		);
  }
}

export default Login;
