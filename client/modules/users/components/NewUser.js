import React from 'react';
import {Col, Panel, FormControl, FormGroup, Button} from 'react-bootstrap';

class NewUser extends React.Component {
  createUser(e) {
    e.preventDefault();
    const {create} = this.props;
    const {email, password} = this.refs;
    create(email.value, password.value);
    email.value = '';
    password.value = '';
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
              onClick={this.createUser.bind(this)}
              type="submit"
            > Entrar
            </Button>
          </form>
        </Panel>
      </Col>
		);
  }
}

NewUser.propTypes = {
  create: React.PropTypes.func,
  error: React.PropTypes.string
};

export default NewUser;
