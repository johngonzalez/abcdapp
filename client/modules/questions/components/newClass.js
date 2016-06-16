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
    this.createClass = this.createClass.bind(this);
    this.create = props.create;
    this.error = props.error;
    this.showModal = false;
    this.openModal = props.openModal;
    this.closeModal = props.closeModal;
  }
  createClass(e) {
    e.preventDefault();
    const {name, durationQuestion} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.create(find(name).value, parseInt(find(durationQuestion).value, 10));
    find(name).value = '';
  }
  render() {
    const {showModal, error} = this.props;
    return (
      <div>
          <Button
            bsStyle="primary"
            bsSize="small"
            onClick={this.openModal}
          >
            New Class
          </Button>
          <Modal show={showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create new Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  {error ? <p style={{color: 'red'}}>{error}</p> : null}
                  <FormControl ref="name" type="text" placeholder="Class name" />
                </FormGroup>
                <FormGroup controlId="component">
                  <FormControl
                    componentClass="select"
                    placeholder="Duration by question"
                    defaultValue=""
                    ref="durationQuestion"
                  >
                    <option value="" disabled>Duración por pregunta</option>
                    <option value="30">30 segundos</option>
                    <option value="60">1 minuto</option>
                    <option value="90">1.5 minutos</option>
                    <option value="120">2 minutos</option>
                    <option value="180">3 minutos</option>
                    <option value="300">5 minutos</option>
                    <option value="600">10 minutos</option>
                  </FormControl>
                </FormGroup>
                <Button type="submit" onClick={this.createClass}>Create</Button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
		);
  }
}

export default NewClass;
