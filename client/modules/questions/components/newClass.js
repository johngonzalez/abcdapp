import React from 'react';
import {Button, Modal, FormGroup, FormControl, Checkbox} from 'react-bootstrap';
import ReactDOM from 'react-dom';

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
  getValue(node) {
    // convert HTMLCollection  to Array
    let children = Array.prototype.slice.call(node.querySelectorAll('input[type=checkbox]'));
    // find if was checked
    return children[0].checked;
  }
  createClass(e) {
    e.preventDefault();
    const {name, durationQuestion, isPublic} = this.refs;
    const find = ReactDOM.findDOMNode;
    this.create(
      find(name).value,
      parseInt(find(durationQuestion).value, 10),
      this.getValue(find(isPublic))
    );
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
                <FormGroup>
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
                <FormGroup>
                  <Checkbox ref="isPublic">
                    Público
                  </Checkbox>
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
