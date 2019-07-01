import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
  //import {Route,Switch } from 'react-router';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import ConfigureStore,{ history } from "./reduxes/configureStore";
import "./index.css";
import { User } from "./model/user";
import { WXFN } from "./libs/wxFn";

import Login from "./view/login";

import Temp from "./view/temp/temp"
let store = ConfigureStore();

WXFN.WXLogin(()=>{

   ReactDOM.render( Object.keys(User.getUserInfo()).length!=0 ?  <Login/> : 
    <Provider store={store}>

        <ConnectedRouter history={history}>
          
                <Switch>
                    <Route exact path="/" render={e=>{
                      return   <Temp/>
               
                    }}/>
                 
                </Switch>
              
            </ConnectedRouter>
        </Provider>  , 
    document.getElementById('root'));
},true)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
