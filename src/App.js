import React, { Component } from 'react';
import Search from "./Search";
import './App.css';
import axios from "axios";
import Giphy from "./Giphy";

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {gif:[],val:''};
    this.handleSearch = this.handleSearch.bind(this);
  } 
  handleSearch(val){
    this.setState({val:val},this.getGif);
  }
  async getGif(){
    const x = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.val}&api_key=bwhrD5ikLdXQQTDsFx547Q4Q3DsNwoN1&limit=5`)
    this.setState({gif:[...this.state.gif,...(x.data.data)]})
  }
  render() {
    return (
      <div className="App">
        <Search handleSearch={this.handleSearch}/>
        <div className="giphy-container">
          { this.state.gif.length === 0 ? <span>&nbsp;&nbsp;</span>:this.state.gif.map((e)=><Giphy imgsrc={e.images.downsized_large}/>)}
        </div>
      </div>
    );
  }
}

export default App;
