import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TetrisCanvas from './Components/TetrisCanvas'
import { Route, Switch, withRouter} from 'react-router-dom'
import HighScores from './Components/HighScore'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import HomeScreen from './Containers/HomeScreen'
import UserScreen from './Containers/UserScreen'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path="/LocalMode" component={TetrisCanvas}/>
      <Route exact path="/userMain" component={UserScreen}/>
      <Route exact path="/Login" render={() => <Login/>}/>
      <Route exact path="/SignUp" render={()=> <SignUp/>}/>
      <Route exact path="/HighScores" component={HighScores}/>
      <Route exact path="/" component={HomeScreen}/>
      </Switch>
      </div>
    );
  }
}

export default App;
