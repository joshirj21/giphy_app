import React, { Component } from 'react';
import Category from "./Category";
import {Switch,Route,Render} from "react-router-dom";
import './App.css';
import GiphyList from './GiphyList';
import MyNavbar from "./Navbar";
import Container from "react-bootstrap/Container";

class App extends Component {
 render(){
   return (
    <div>
        <MyNavbar />
        <Switch>
        <Route 
              exact path="/"      
              render={() => <GiphyList />} />      
        <Route exact path="/:name"
              render={routeProps => <Category {...routeProps} />} />
        </Switch>
    </div>
   )
 } 
}

export default App;

// Categories
// Random
// Liked
// Saved
// Stickers
// Trending
// Yesterday

{/* */}