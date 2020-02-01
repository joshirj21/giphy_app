import React, { Component } from 'react';
import axios from "axios";
import Container from "react-bootstrap/Container"
import Radium, {Style} from 'radium';
import Search from "./Search";
import "./GiphyList.css";
import Giphy from "./Giphy";

class GiphyList extends Component{
    constructor(props){
        super(props); 
        this.state = {gifSearch:[],val:'',gifTrending:[]};
        this.handleSearch = this.handleSearch.bind(this);
      }
      async componentDidMount() {
        const x = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=bwhrD5ikLdXQQTDsFx547Q4Q3DsNwoN1&limit=10&rating=G`)
        this.setState({gifTrending:[...this.state.gifTrending,...(x.data.data)]});
      } 
      handleSearch(val){
        this.setState({val:val},this.getGif);
      }
      async getGif(){
        const x = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.val}&api_key=bwhrD5ikLdXQQTDsFx547Q4Q3DsNwoN1&limit=10`)
        this.setState({gifSearch:[...(x.data.data)]})
      }
      render() {
        var styles = {
          giphyContainerTrending:{
            
            display:"flex",
            justifyContent:"space-evenly",
            overflowX:"scroll"
          },
          giphyContainerSearch:{
            display:"flex",
            justifyContent:"space-evenly",
            overflowX:"scroll"
          },
          primaryHeading:{
            textAlign:"center"
          }
        }
        return (
          <Container>
            <Search handleSearch={this.handleSearch}/>
            <h1 style={styles.primaryHeading}>Trending GIFS</h1>
            <div style={styles.giphyContainerTrending}>
            { this.state.gifTrending.length === 0 ? <span>&nbsp;&nbsp;</span>:this.state.gifTrending.map((e)=><Giphy imgSrc={e.images.fixed_height}/>)}
            </div>
            {this.state.gifSearch.length !== 0 ? <h1 style={styles.primaryHeading}>Searched GIFS</h1> : <span>&nbsp;&nbsp;</span>}
            <div style={styles.giphyContainerSearch}>
              { this.state.gifSearch.length === 0 ? <span>&nbsp;&nbsp;</span>:this.state.gifSearch.map((e)=><Giphy imgSrc={e.images.fixed_height}/>)}
            </div>
          </Container>
        );
      }
}

export default Radium(GiphyList);