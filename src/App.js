import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TetrisCanvas from './Components/TetrisCanvas'
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'
import HighScores from './Components/HighScore'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import HomeScreen from './Containers/HomeScreen'
import UserScreen from './Containers/UserScreen'
import GameContainer from './Containers/GameContainer'
import ActionCableProvider from 'react-actioncable-provider'
import {API_WS_ROOT}from './Constants'

// import Background from './Components/Background'



class App extends Component {

  state = {
    user: null
  }

  componentDidMount(){

    if(localStorage.getItem("token")){
      console.log('check ')
      let token = localStorage.getItem("token")
      fetch('http://localhost:3000/profile',{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Action: "application/json",
          Authorization: `${token}`
        }
      })
      .then(resp => resp.json())
      .then(resp => this.setState({
        user: resp.user
      }) )
    }

  }

  createUser =(newUser)=> {
    console.log("im in here");
    console.log(newUser);
   fetch('http://localhost:3000/users', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json'
     },
     body: JSON.stringify({
       user: {
         userName: newUser.username,
         password: newUser.password,
       }
     })
   })
   .then(res => res.json())
   .then(resp => {
     localStorage.setItem("token",resp.jwt);
         this.setState({
           user: resp.user
      })
    })
   // .then(console.log)
 //     {
 //     localStorage.setItem("token",resp.jwt);
 //     this.setState({
 //       user: resp.user
 //   },()=> console.log(this.state))
 // })
 }


  getUser =(user)=> {
    console.log("im in here");
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          userName: user.loginUsername,
          password: user.loginPassword
        }
      })
    })
    .then(r => r.json())
    .then(resp => {
      localStorage.setItem("token",resp.jwt);
          this.setState({
            user: resp.user
       })
     })

  }

  handleScore = (score)=> {
    fetch('')
  }

  loginSubmitHandler =(e,user)=> {
    e.preventDefault()
    console.log("im in login", user);
    this.getUser(user)
    this.props.history.push('/userMain')
  }

  logOUT=()=>{
    localStorage.removeItem("token")
    this.setState({user:null})
    this.props.history.push('/')
  }


  handleSignUpSubmit =(e,newUser)=> {
    e.preventDefault()
  this.createUser(newUser)
  this.props.history.push('/userMain')
  }

  render() {

  console.log(this.state.user);
    return (
      <div className="App">
    {/*<Background/>*/}
      {localStorage.getItem("token")
       ? <div>
       <Switch>
       <Route
       exact path="/LocalMode"
       component={TetrisCanvas}/>
       <Route
       exact path="/MultiGame"
       render={()=>
         <ActionCableProvider url={API_WS_ROOT}>
         <GameContainer user={this.state.user}/>
         </ActionCableProvider>
       }/>
       <Route
       exact path="/userMain"
       render={() => <UserScreen
         logout={this.logOUT}
         user={this.state.user}/>
       }/>
       <Route exact path="/HighScores" component={HighScores}/>
       <Route
       exact path="/SignUp"
       render={()=> <SignUp SignUpSubmitHandler={this.handleSignUpSubmit}/>
     }/>
     <Route
     exact path="/Login"
     render={() => <Login loginSubmitHandler={this.loginSubmitHandler}/>
   }/>
    <Route  path="/" component={HomeScreen}/>
    </Switch>
       </div>

      : <div>
        <Switch>
      <Route
       path="/LocalMode" component={TetrisCanvas}/>
      <Route
      exact path="/SignUp"
      render={()=> <SignUp SignUpSubmitHandler={this.handleSignUpSubmit}/>
      }/>
    <Route
    exact path="/Login"
    render={() => <Login loginSubmitHandler={this.loginSubmitHandler}/>
  }/>

   <Route  path="/" component={HomeScreen}/>




   </Switch>
       </div>
      }
      </div>
    );
  }
}

export default withRouter(App);
