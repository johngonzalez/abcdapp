import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal, FormGroup, FormControl} from 'react-bootstrap';

class NewUser extends React.Component {
  static propTypes() {
    return {
      userRole: this.propTypes.string,
      create: this.propTypes.func.required,
      errorForm: this.propTypes.string,
      errorServer: this.propTypes.string,
      showModal: this.propTypes.bool.required,
      openModal: this.propTypes.func.required,
      closeModal: this.propTypes.func.required
    };
  }
  constructor(props) {
    super(props);
    this.createInvitation = this.createInvitation.bind(this);
    this.create = props.create;
  }
  createInvitation(userRole) {
    return (e) => {
      e.preventDefault();
      const {email} = this.refs;
      const find = ReactDOM.findDOMNode;
      this.create(find(email).value, userRole);
      find(email).value = '';
    };
  }
  render() {
    const {showModal, openModal, closeModal, errorForm, errorServer, userRole} = this.props;
    return (
      <div>
        {errorServer ? <p style={{color: 'red'}}>{errorServer}</p> : null}
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={openModal}
        >
          Enviar invitación
        </Button>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Nuevo usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <FormControl ref="email" type="text" placeholder="Email" />
              </FormGroup>
              {errorForm ? <p style={{color: 'red'}}>{errorForm}</p> : null}
              <Button type="submit" onClick={this.createInvitation(userRole)}>Invitar</Button>
            </form>
          </Modal.Body>
        </Modal>
        </div>
		);
  }
}

export default NewUser;
