import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class UserScreen extends Component {

  render() {
    console.log(this.props.user);
    return (

      <div>
      <Button.Group vertical>
        <Link to="/MultiGame">
          <Button color='green' size='massive'>
            Start Game
          </Button>
        </Link>
        <Link to="/HighScores">
          <Button color='yellow' size='massive'>
            HighScores
          </Button>
        </Link>
        <Button
        onClick={this.props.logout}
        color='red'
        size='massive'>
          LOG OUT
        </Button>
      </Button.Group>
      <div>
      Friends list goes here
      </div>
      <div>
      player.score.last
      </div>
      <div>
      wins && losses
      </div>
      </div>


    );
  }

}

export default UserScreen;
