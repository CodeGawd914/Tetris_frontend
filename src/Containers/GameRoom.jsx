import React from 'react'
import { ActionCable } from 'react-actioncable-provider'
import { API_ROOT } from '../Constants'

import Cable from '../Components/Cables'

class Gameroom extends React.Component {

  state {

  }

  componentDidMount(){
    fetch(`${API_ROOT}/gamerooms`)
    .then(res => res.json())
    .then(console.log)
  }

  render(){
    return (

    )
  }
}
