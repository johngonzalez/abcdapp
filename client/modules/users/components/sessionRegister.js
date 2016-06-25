import React from 'react';
import {Panel, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

const SessionRegisterCode = () => (
  <Panel>
    <form>
      <FormGroup>
        <ControlLabel>
          Ingresa el código de la sesión de clase dada por tu profesor
        </ControlLabel>
        <FormControl type="text" placeholder="Enter code" />
      </FormGroup>
      <Button type="submit">Ingresa</Button>
    </form>
  </Panel>
);

export default SessionRegisterCode;
