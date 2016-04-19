import React from 'react';
import {Col, Panel, FormControl, FormGroup, Button} from 'react-bootstrap';

class Login extends React.Component {
  login(e) {
    e.preventDefault();
    const {loginUser} = this.props;
    const {email, password} = this.refs;
    loginUser(email.value, password.value);
    email.value = '';
    password.value = '';
  }

  render() {
    const {error} = this.props;
    return (
			<Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Entra</h1>
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
              onClick={this.login.bind(this)}
              type="submit"
            > Entrar
            </Button>
          </form>
        </Panel>
      </Col>
		);
  }
}

Login.propTypes = {
  loginUser: React.PropTypes.func,
  error: React.PropTypes.string
};

export default Login;
