import React from 'react';
//import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Article from './components/static/Article'
import Home from './components/static/Home'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login'


function App(props) {
  return (
    <BrowserRouter>
    <div className="App container img">
      <h1>My Clinic App</h1>
      <Link to="/">Home</Link> |
      <Link to='/Articles'>Articles</Link> | 

      <Link to ='/Register'>Register</Link>/
      <Link to ='/Login'>Login</Link>

      <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/Articles"  component={Article} />
      <Route path="/register"  component={Register}/>
      <Route path="/LOgin" component={Login}/>
      </Switch>
      
    </div>
    </BrowserRouter>
    
  )
}

export default App;
