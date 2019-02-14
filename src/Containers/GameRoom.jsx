import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { API_ROOT } from '../Constants'

import GameCable from '../Components/GameCable'

class GameRoom extends React.Component {

  state = {
    game: []

  }

  componentDidMount(){
    fetch(`${API_ROOT}/gamerooms`)
    .then(res => res.json())
    .then(res => console.log("chicken", res))
  }

  handleReceivedGame = (response)=>{
    console.log("chicken",response)
  }

  render(){
    const { game, activeGame } = this.state;
    return (
      <div>
      <ActionCableConsumer
        channel={{ channel: 'GameroomChannel' }}
        onReceived={this.handleReceivedGame}
      />
      {this.state.game.length ? (
        <GameCable
          game={game}
          handleReceivedArena={this.handleReceivedArena}
        />
      ) : null}
      </div>

    )
  }
}

export default GameRoom
