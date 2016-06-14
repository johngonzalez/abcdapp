import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Modal,
  FormGroup,
  FormControl,
  Radio,
  HelpBlock} from 'react-bootstrap';

class NewQuestion extends React.Component {
  static propTypes() {
    return {
      create: this.propTypes.func.isRequired,
      error: this.propTypes.string,
      showModal: this.propTypes.bool.isRequired,
      openModal: this.propTypes.func.isRequired,
      closeModal: this.propTypes.func.isRequired,
      classId: this.propTypes.string.isRequired,
      questionSeq: this.propTypes.number.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.createQuestion = this.createQuestion.bind(this);
    this.create = props.create;
    this.error = props.error;
    this.showModal = false;
    this.openModal = props.openModal;
    this.closeModal = props.closeModal;
    this.classId = props.classId;
  }
  getValue(node) {
    // convert HTMLCollection  to Array
    let children = Array.prototype.slice.call(node.querySelectorAll('input[type=radio]'));
    // find out the radio which was checked
    let result = children.filter( item => item.checked);
    // checkbox group only one can be checked.
    if (!result || !result[0] || !result[0].value) {
      return undefined;
    }
    return parseInt(result[0].value, 10);
  }
  createQuestion(questionSeq) {
    return (e) => {
      e.preventDefault();
      const {name, file, ans, component, competence} = this.refs;
      const find = ReactDOM.findDOMNode;
      const response = this.getValue(find(ans));
      this.create(
        questionSeq,
        find(name).value,
        find(file).files[0],
        this.classId,
        response,
        find(component).value,
        find(competence).value
      );
    };
  }
  render() {
    const {showModal, error, questionSeq} = this.props;
    return (
      <div>
          <Button
            bsStyle="primary"
            bsSize="small"
            onClick={this.openModal}
          >
            New Question
          </Button>
          <Modal show={showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create new Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  {error ? <p style={{color: 'red'}}>{error}</p> : null}
                  <FormControl ref="name" type="text" placeholder="Question name" />
                </FormGroup>
                <FormGroup controlId="formControlsFile">
                  <HelpBlock>Upload image</HelpBlock>
                  <FormControl ref="file" type="file" />
                </FormGroup>
                <FormGroup ref="ans">
                  <HelpBlock>Select the correct answer:</HelpBlock>
                  <Radio value={0} name="response">a</Radio>
                  <Radio value={1} name="response">b</Radio>
                  <Radio value={2} name="response">c</Radio>
                  <Radio value={3} name="response">d</Radio>
                </FormGroup>
                <HelpBlock>Select component and competence:</HelpBlock>
                <FormGroup controlId="component">
                  <FormControl
                    componentClass="select"
                    placeholder="Component"
                    defaultValue=""
                    ref="component"
                  >
                    <option value="" disabled>Componente</option>
                    <option value="matematicas">Matemáticas</option>
                    <option value="fisica">Física</option>
                    <option value="quimica">Química</option>
                    <option value="biologia">Biología</option>
                    <option value="lenguaje">Lenguaje</option>
                    <option value="sociales">Ciencias Sociales</option>
                    <option value="filosofia">Filosofía</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="competence">
                  <FormControl
                    componentClass="select"
                    placeholder="Competence"
                    defaultValue=""
                    ref="competence"
                  >
                    <option value="" disabled>Competencia</option>
                    <option value="aleatorio">Aleatorio</option>
                    <option value="geometrico">Geométrico-métrico</option>
                    <option value="numerico">Numérico-variacional</option>
                    <option value="mecanica">Mecánica clásica</option>
                    <option value="electromagnetico">Eventos electromagnéticos</option>
                    <option value="ondulatorio">Eventos ondulatorios</option>
                    <option value="termodinamica">Termodinámica</option>
                  </FormControl>
                </FormGroup>
                <Button type="submit" onClick={this.createQuestion(questionSeq)}>Create</Button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
		);
  }
}

export default NewQuestion;
