import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Panel, FormControl, FormGroup, Button} from 'react-bootstrap';

class Login extends React.Component {
  static propTypes() {
    return {
      login: this.propTypes.func,
      toggleRegisterUser: this.propTypes.func,
      isRegistering: this.propTypes.bool,
      create: this.propTypes.func,
      error: this.propTypes.string
    };
  }
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.login = props.login;
    this.toggleRegister = this.toggleRegister.bind(this);
    this.toggleRegisterUser = props.toggleRegisterUser;
    this.createUser = this.createUser.bind(this);
    this.create = props.create;
    this.error = props.error;
  }
  toggleRegister(e) {
    e.preventDefault();
    this.toggleRegisterUser();
  }
  createUser(e) {
    e.preventDefault();
    const {email, password, confirmPassword} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.create(find(email).value, find(password).value, find(confirmPassword).value);
  }
  loginUser(e) {
    e.preventDefault();
    const {email, password} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.login(find(email).value, find(password).value);
  }
  render() {
    const {error, isRegistering} = this.props;
    return (
			<Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>{isRegistering ? 'Registro' : 'Entra'}</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <FormGroup>
              <FormControl ref="email" type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <FormControl ref="password" type="password" placeholder="Password" />
            </FormGroup>
            {
              isRegistering ?
              <FormGroup>
                <FormControl ref="confirmPassword" type="password" placeholder="Confirm Password" />
              </FormGroup> :
              null
            }
            <Button
              bsStyle="default"
              onClick={isRegistering ? this.createUser : this.loginUser}
              type="submit"
            > {isRegistering ? 'Registrar' : 'Entrar'}
            </Button>
          </form>
          <hr />
          {
            isRegistering ?
            <p>
              <span>Ya tienes cuenta, </span>
              <a style={{cursor: 'pointer'}} onClick={this.toggleRegister}>Entra</a>
            </p> :
            <p>
              <span>No tienes cuenta, </span>
              <a style={{cursor: 'pointer'}} onClick={this.toggleRegister}>Crea una</a>
            </p>
          }
        </Panel>
      </Col>
		);
  }
}

export default Login;
