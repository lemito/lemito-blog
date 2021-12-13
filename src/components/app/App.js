import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//import Authorship from "../authorship/authorship/Authorship";
import { checkAuth } from "../../util/api";
import { ACCESS_TOKEN } from "../../util/const";
import './App.css';

import Public from "../public/Public";
const state = {
  isAuthenticated: false
}

const componentWillReceiveProps = async () => {
  await checkAuth()
    .then(response => {
      if(response.status === 200) {
        this.setState({
          isAuthenticated: true
        });
    }}).catch(error => {
      this.setState({
        isAuthenticated: false
      });
    });
}

const handleLogIn = (history) => {
  this.setState({
    isAuthenticated: true
  });
  history.push("/authorship/letters/last");
}

const handleLogOut = (history) => {
  localStorage.removeItem(ACCESS_TOKEN);

  this.setState({
    isAuthenticated: false
  });

  history.push("/public/letters/last");
}

export default function App(){
  
    return (
      <Router>
        <div>

          <Switch>
            <Route path={ `/public/letters/:id` } component={ Public } />
            <Redirect from="/" to="/public/letters/last" />
           </Switch>

           <p style={"color='white'"}>made by lemit C</p>

        </div>
      </Router>
    );

}
