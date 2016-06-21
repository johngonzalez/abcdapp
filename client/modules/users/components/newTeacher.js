import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal, FormGroup, FormControl} from 'react-bootstrap';

class NewClass extends React.Component {
  static propTypes() {
    return {
      create: this.propTypes.func.required,
      error: this.propTypes.string,
      showModal: this.propTypes.bool.required,
      openModal: this.propTypes.func.required,
      closeModal: this.propTypes.func.required
    };
  }
  constructor(props) {
    super(props);
    this.createInvitation = this.createInvitation.bind(this);
    this.create = props.create;
    this.error = props.error;
  }
  createInvitation(e) {
    e.preventDefault();
    const {name} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.create(find(name).value);
    find(name).value = '';
  }
  render() {
    const {showModal, openModal, closeModal, error} = this.props;
    return (
      <div>
          <Button
            bsStyle="primary"
            bsSize="small"
            onClick={openModal}
          >
            Enviar invitación
          </Button>
          <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Invita un profesor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  {error ? <p style={{color: 'red'}}>{error}</p> : null}
                  <FormControl ref="name" type="text" placeholder="Email" />
                </FormGroup>
                <Button type="submit" onClick={this.createInvitation}>Invitar</Button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
		);
  }
}

export default NewClass;
