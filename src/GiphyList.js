import React, { Component } from 'react';
import axios from "axios";

import Search from "./Search";
import "./GiphyList.css";
import Giphy from "./Giphy";

class GiphyList extends Component{
    constructor(props){
        super(props); 
        this.state = {gifSearch:[],val:'',gifTrending:[]};
        this.handleSearch = this.handleSearch.bind(this);
      }
      // async componentDidMount() {
      //   console.log("rendered")
      //   const x = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=bwhrD5ikLdXQQTDsFx547Q4Q3DsNwoN1&limit=6&rating=G`)
      //   this.setState({gifTrending:[...this.state.gifTrending,...(x.data.data)]});
      // } 
      handleSearch(val){
        this.setState({val:val},this.getGif);
      }
      async getGif(){
        const x = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.val}&api_key=bwhrD5ikLdXQQTDsFx547Q4Q3DsNwoN1&limit=6`)
        this.setState({gifSearch:[...this.state.gifSearch,...(x.data.data)]})
      }
      render() {
        return (
          <div>
            <Search handleSearch={this.handleSearch}/>
            <h1>Trending GIFS</h1>
            {/* <div className="giphy-container-trending">
            { this.state.gifTrending.length === 0 ? <span>&nbsp;&nbsp;</span>:this.state.gifTrending.map((e)=><Giphy imgsrc={e.images.fixed_height}/>)}
            </div>
            <div className="giphy-container-search">
              { this.state.gifSearch.length === 0 ? <span>&nbsp;&nbsp;</span>:this.state.gifSearch.map((e)=><Giphy imgsrc={e.images.fixed_height}/>)}
            </div> */}
          </div>
        );
      }
}

export default GiphyList;