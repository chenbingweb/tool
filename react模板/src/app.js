import React from "react";
import { Provider } from "react-redux";
 import { Router, Route,Switch } from 'react-router';
// import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import ConfigureStore,{ history } from "./reduxes/configureStore";
import "./index.css";
import { User } from "./model/user";
import { WXFN } from "./libs/wxFn";

import Login from "./view/login";
import EnterPage from "./view/enterPage/enterPage";
import Register from "./view/register/register"
let store = ConfigureStore();


export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
     
    }
    render(){
        
        return   <div>dd</div>
    }
}