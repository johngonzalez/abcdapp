import React from 'react';
import ReactDOM from 'react-dom';
import {FormControl, FormGroup, Button} from 'react-bootstrap';

class Login extends React.Component {
  static propTypes() {
    return {
      login: this.propTypes.func,
      error: this.propTypes.string
    };
  }
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.login = props.login;
    this.error = props.error;
  }
  loginUser(e) {
    e.preventDefault();
    const {email, password} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.login(find(email).value, find(password).value);
  }
  render() {
    const {error} = this.props;
    return (
      <form>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <FormGroup>
          <FormControl ref="email" type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <FormControl ref="password" type="password" placeholder="Password" />
        </FormGroup>
        <Button
          bsStyle="default"
          onClick={this.loginUser}
          type="submit"
        > Entrar
        </Button>
      </form>
		);
  }
}

export default Login;
