import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis} from 'victory-chart';
import {Col, Row} from 'react-bootstrap';

const Question = ({question, ownSelected, responsesGroup}) => (
  <div>
    <p>Correcta: {String.fromCharCode(97 + question.response)}</p>
    {
      ownSelected === undefined || ownSelected === -1 ?
      <p>No respondiste esta pregunta</p> :
      <p>Tu respuesta: {String.fromCharCode(97 + ownSelected)}</p>
    }
    <hr />
    <Row>
      <Col xs={12} md={6} style={{float: 'none', margin: '0 auto'}}>
        <VictoryChart height={280}>
          <VictoryAxis dependentAxis
            style={{
              tickLabels: {fontSize: 24},
              axis: {strokeWidth: 0},
            }}

          />
          <VictoryBar horizontal
            style={{
              data: {width: 50, fill: '#3071a9'},
              labels: {fontSize: 24}
            }}
            data = {
              responsesGroup.reverse().map((rg, idx) => (
                {
                  x: String.fromCharCode(100 - idx),
                  y: rg.length,
                  label: rg.length,
                }
              ))
            }
          />
        </VictoryChart>
      </Col>
    </Row>
  </div>
);

Question.propTypes = {
  question: React.PropTypes.object.isRequired,
  ownSelected: React.PropTypes.number,
  responsesGroup: React.PropTypes.array.isRequired
};

export default Question;
