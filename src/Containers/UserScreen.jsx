import React, { Component } from 'react'
import {Button,Card,Feed} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class UserScreen extends Component {

  render() {
    console.log(this.props.user);
    return (

      <div>
      <Button.Group padded='very' horizontal>
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
      <Card>
   <Card.Content>
     <Card.Header>Friends List</Card.Header>
   </Card.Content>
   <Card.Content>
     <Feed>
       <Feed.Event>
         <Feed.Label image='/images/avatar/small/jenny.jpg' />
         <Feed.Content>
           <Feed.Date content='1 day ago' />
           <Feed.Summary>
             You added <a>Jenny Hess</a> to your <a>Tetris1</a> group.
           </Feed.Summary>
         </Feed.Content>
       </Feed.Event>

       <Feed.Event>
         <Feed.Label image='/images/avatar/small/molly.png' />
         <Feed.Content>
           <Feed.Date content='3 days ago' />
           <Feed.Summary>
             You added <a>Molly Malone</a> as a friend.
           </Feed.Summary>
         </Feed.Content>
       </Feed.Event>

       <Feed.Event>
         <Feed.Label image='/images/avatar/small/elliot.jpg' />
         <Feed.Content>
           <Feed.Date content='4 days ago' />
           <Feed.Summary>
              <a>Elliot Baker </a>  beat your score
           </Feed.Summary>
         </Feed.Content>
       </Feed.Event>
     </Feed>
   </Card.Content>
 </Card>
      </div>
      <div>
      {this.props.user
        ? <div>
          <Button
            color='red'
            content="Your HighScore"
            icon='chess king'
            label={{ basic: true, color: 'red', pointing: 'left', content: this.props.user.score }}
          />
          <Button
            basic
            color='blue'
            content='Friends'
            icon='american sign language interpreting'
            label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '3' }}
          />

        </div>
        : null
      }

      </div>
      <div>
      wins && losses
      </div>
      </div>


    );
  }

}

export default UserScreen;
