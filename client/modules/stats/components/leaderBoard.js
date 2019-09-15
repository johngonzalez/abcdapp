import React from 'react';

const LeaderBoard = ({goodQuestionByUser}) => (
  <div>
    <p>Respuestas correctas por pregunta:</p>
    <ol>
      {
        Object.keys(goodQuestionByUser).map((key, i) =>
          <li key={i}>{key} : {goodQuestionByUser[key].length}</li>
        )
      }
    </ol>
  </div>
);

LeaderBoard.propTypes = {
  goodQuestionByUser: React.PropTypes.object.isRequired
};

export default LeaderBoard;
