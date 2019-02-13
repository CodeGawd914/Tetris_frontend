import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { API_ROOT } from '../Constants'

import Cable from '../Components/Cables'

class GameRoom extends React.Component {

  state = {

  }

  componentDidMount(){
    fetch(`${API_ROOT}/gamerooms`)
    .then(res => res.json())
    .then(console.log)
  }

  render(){
    return (
      <div>
      <ActionCableConsumer
        channel={{ channel: 'GameroomChannel' }}
        onReceived={this.handleReceivedGame}
      />
      </div>

    )
  }
}

export default GameRoom
