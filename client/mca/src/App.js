import React from 'react';
//import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Article from './components/static/Article'
import Home from './components/static/Home'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login'
import {connect} from 'react-redux'
import {startUserLogout} from './actions/userAction'

function App(props) {
const handleLogout=()=>{
  props.dispatch(startUserLogout())
}

  return (
    <BrowserRouter>
    <div className="App container img">
      <h1>My Clinic App</h1>
      <Link to="/">Home</Link> |
      {
        Object.keys(props.user).length !== 0 ? 
        (
          <div>
            <Link to='/Articles'>Articles</Link> |
            <Link to="#" onClick={handleLogout}>Logout</Link>
            </div>

        ) : (
          <div>
          <Link to ='/users/register'>Register</Link>/
          <Link to ='/users/login'>Login</Link>

          </div>

        )
      }
       

      

      <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/Articles"  component={Article} />
      <Route path="/users/register"  component={Register}/>
      <Route path="/users/login" component={Login}/>
      </Switch>
      
    </div>
    </BrowserRouter>
    
  )
}

const mapStateToProps=(state)=>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(App)
