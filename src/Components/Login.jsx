import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



class Login extends Component {

  state ={
    loginUsername:"",
    loginPassword:""
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
              <Image src='/logo.png' /> Log-in to your account
            </Header>
            <Form
            onSubmit={e => this.props.loginSubmitHandler(e,this.state)}
            size='large'>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  name="loginUsername"
                  value={this.state.loginUsername}
                  iconPosition='left'
                  placeholder='UserName'
                  onChange={(e)=> this.handleChange(e)}
                />
                <Form.Input
                  fluid
                  type='password'
                  icon='lock'
                  name="loginPassword"
                  value={this.state.loginPassword}
                  iconPosition='left'
                  placeholder='Password'
                  onChange={(e)=> this.handleChange(e)}
                />

                <Button color='red' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>

            <Message>
              New to us? <br></br>
              <Link to="/signUp">
              Sign Up
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

}

export default Login;
