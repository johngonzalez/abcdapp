import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Panel, FormControl, FormGroup, Button} from 'react-bootstrap';

class AcceptInvitation extends React.Component {
  static propTypes() {
    return {
      create: this.propTypes.func.isRequired,
      error: this.propTypes.string,
      email: this.propTypes.string.isRequired,
      token: this.propTypes.string.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
    this.create = props.create;
    this.token = this.props.token;
  }
  createUser(e) {
    e.preventDefault();
    const {password, confirmPassword} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.create(
      this.props.email,
      find(password).value,
      find(confirmPassword).value,
      this.token
    );
  }
  render() {
    const {error, email} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        {
          email ?
            <Panel>
              <h1>Bienvenido</h1>
              <h3>{email}</h3>
              {error ? <p style={{color: 'red'}}>{error}</p> : null}
              <form>
                <FormGroup>
                  <FormControl
                    ref="password"
                    type="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    ref="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </FormGroup>
                <Button
                  bsStyle="default"
                  onClick={this.createUser}
                  type="submit"
                > Regístrate
                </Button>
              </form>
              <hr />
            </Panel> :
          <p>Loading email...</p>
          }
      </Col>
    );
  }
}

export default AcceptInvitation;
