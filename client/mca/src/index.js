import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'



import configureStore from './store/configureStore';
import {startGetUser} from './actions/userAction'

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
  console.log(store.getState())
})

//handle page reload
if(localStorage.getItem('authToken')){
  store.dispatch(startGetUser())
}


const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
