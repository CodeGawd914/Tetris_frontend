import React, { Component } from 'react';
import TetrisCanvas from '../Components/TetrisCanvas'
import Conversations from './Conversations'
import {Grid} from 'semantic-ui-react'

class GameContainter extends Component {

  render() {
    return (
      <Grid>
        <Grid.Column floated='left' width={5}>
            <TetrisCanvas/>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
            <Conversations user={this.props.user}/>
        </Grid.Column>
      </Grid>

    );
  }

}

export default GameContainter;
