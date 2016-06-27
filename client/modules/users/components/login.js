import React from 'react';
import LoginUser from '../containers/loginUser';
import SessionRegister from '../../questions/containers/sessionRegister';
import {Panel, Col} from 'react-bootstrap';

class Login extends React.Component {
  static propTypes() {
    return {
      loginUsingGuest: this.propTypes.bool.isRequired,
      toggle: this.propTypes.func.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.toggleGuest = this.toggleGuest.bind(this);
    this.toggle = props.toggle;
  }
  toggleGuest(e) {
    e.preventDefault();
    this.toggle();
  }
  render() {
    const {loginUsingGuest} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <h1>Entra</h1>
        <Panel>
          {
            loginUsingGuest ?
            <div>
              <SessionRegister />
              <hr />
              <p>
                <span>Ya tienes cuenta, </span>
                <a style={{cursor: 'pointer'}} onClick={this.toggleGuest}>
                  entra
                </a>
              </p>
            </div> :
            <div>
              <LoginUser />
              <hr />
              <p>
                <span>No tienes cuenta, intenta ingresar el </span>
                <a style={{cursor: 'pointer'}} onClick={this.toggleGuest}>
                  código de clase
                </a>
              </p>
            </div>
          }
        </Panel>
      </Col>
    );
  }
}

export default Login;
