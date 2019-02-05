import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
class HomeScreen extends Component {

  render() {
    return (
      <div>
      <br></br>
      <br></br>
      <Button.Group vertical>
        <Link to="/Login">
          <Button size='massive'> Login </Button>
        </Link><br></br>
        <Link to="/SignUp">
          <Button size='massive'> SignUp </Button>
        </Link><br></br>
        <Link to="/LocalMode">
          <Button size='massive'> Local Mode </Button>
        </Link><br></br>
      </Button.Group>
      </div>
    );
  }

}

export default HomeScreen;
