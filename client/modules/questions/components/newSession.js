import React from 'react';
import {Button} from 'react-bootstrap';

class NewSession extends React.Component {
  static propTypes() {
    return {
      create: this.propTypes.func.isRequired,
      classId: this.propTypes.string.isRequired,
      code: this.propTypes.string.isRequired,
      pushedCreateSession: this.propTypes.isRequired,
      error: this.propTypes.string
    };
  }
  constructor(props) {
    super(props);
    this.create = props.create;
    this.classId = props.classId;
    this.createSession = this.createSession.bind(this);
  }
  createSession(e) {
    e.preventDefault();
    this.create(this.classId);
  }
  render() {
    const {error, code, pushedCreateSession} = this.props;
    return (
      <div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        {
          pushedCreateSession ?
          <p>
            {
              code ?
              `Comparte el siguiente código con tus estudiantes: ${code}` :
              'creando código ...'
            }
          </p> :
          <Button onClick={this.createSession}>
            Inicia esta clase!
          </Button>
        }
      </div>
    );
  }
}

export default NewSession;
