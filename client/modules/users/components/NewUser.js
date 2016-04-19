import React from 'react';

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
			<div>
				<h1>Register</h1>
				{error ? <p style={{color: 'red'}}>{error}</p> : null}
				<form>
					<input ref="email" type="email" placeholder="Email" />
					<input ref="password" type="password" placeholder="Password" />
					<button onClick={this.createUser.bind(this)} type="submit">Sign Up</button>
				</form>
			</div>
		);
  }
}

NewUser.propTypes = {
  create: React.PropTypes.func,
  error: React.PropTypes.string
};

export default NewUser;
