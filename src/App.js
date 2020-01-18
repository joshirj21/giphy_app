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
        <Route 
              exact path="/"      
              render={() => <GiphyList/>} />
        <Route path="/:name"
              render={routeProps => <Category {...routeProps} />} />
        {/* <Switch>
            <Route 
              exact path="/"      
              render={() => <GiphyList/>} />
            <Route 
              exact path="/Entertainment"  
              render={() => <h1>This is Entertainment Category</h1>} />
            <Route 
              exact path="/Sports"
              render={() => <h1>This is Sports Category</h1>} />
            <Route 
              exact path="/Stickers"
              render={() => <h1>This is Stickers Category</h1>} />
            <Route 
              exact path="/Liked"
              render={() => <h1>This is Liked Category</h1>} />
            <Route 
              exact path="/Saved"
              render={() => <h1>This is Saved Category</h1>} />  
        </Switch>  */}
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