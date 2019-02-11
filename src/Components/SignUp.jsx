import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



class SignUp extends Component {

  state ={
    username:"",
    password:""
  }

  handleChange =(e)=> {

    this.setState({
      [e.target.name]: e.target.value
    })


  }


  render() {


    return (
      <div className='login-form'>

        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Sign up for Super Mega Tetris
            </Header>
            <Form
            onSubmit={e => this.props.SignUpSubmitHandler(e,this.state)}
            size='large'>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  name="username"
                  value={this.state.username}
                  iconPosition='left'
                  placeholder='UserName'
                  onChange={(e)=> this.handleChange(e)}
                />
                <Form.Input
                  fluid
                  type='password'
                  icon='lock'
                  name="password"
                  value={this.state.password}
                  iconPosition='left'
                  placeholder='Password'
                  onChange={(e)=> this.handleChange(e)}
                />

                <Button color='red' fluid size='large'>
                  Sign UP
                </Button>
              </Segment>
            </Form>
            <Message>
              Already Have an account <br></br>
              <Link to="/login">
              Log In
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

}

export default SignUp;
