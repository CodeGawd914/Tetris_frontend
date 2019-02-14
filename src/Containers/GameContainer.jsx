import React, { Component } from 'react';
import TetrisCanvas from '../Components/TetrisCanvas'
import Conversations from './Conversations'
import {Grid, Button} from 'semantic-ui-react'
import GameRoom from './GameRoom'
import {Link} from 'react-router-dom'

class GameContainter extends Component {

  componentDidMount(){
    // going to do somthing to call for a connection
  }

  render() {
    return (
      <React.Fragment>
      {localStorage.getItem("token")
        ?   <Grid>
              <Grid.Column floated='left' width={5}>
                <TetrisCanvas/>
              </Grid.Column>
              <Grid.Column centered>
              <Link to='/userMain'>
                <Button color='red' size="massive">BACK</Button>
              </Link>
              </Grid.Column>
              <Grid.Column floated='right' width={5}>
                <GameRoom user={this.props.user}/>
                <Conversations user={this.props.user}/>
              </Grid.Column>
            </Grid>
        : null
      }

      </React.Fragment>

    );
  }

}

export default GameContainter;
