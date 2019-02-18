import React, { Component } from 'react';
import { Card ,Segment} from 'semantic-ui-react'
class HighScores extends Component {

  render() {
    return (
      <div>
      <br></br>
      <br></br>
        <Segment  color='red' textAlign='center'>
         Top Scores
        </Segment>
      <br></br>
      <br></br>
      <Card.Group itemsPerRow={3}>
    <Card color='yellow'>
      <Segment textAlign='center'>
      GAWD  Date: 02/13/2019 Score:7500
      </Segment>
    </Card>
    <Card color='grey'>
      <Segment textAlign='center'>
      GAWD  Date: 01/31/2019 Score:4800
      </Segment>
    </Card>
    <Card color='brown'>
      <Segment textAlign='center'>
      GAWD Date: 01/31/2019 Score:4800
      </Segment>
    </Card>

    </Card.Group>
      </div>
    );
  }

}

export default HighScores;
