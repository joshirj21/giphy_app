import React, { Component } from 'react';
import axios from "axios"
import Giphy from "./Giphy"
import Container from "react-bootstrap/Container"
import "./Category.css"
import Radium from 'radium';

class Category extends Component{
    constructor(props){
        super(props);
        this.state={gifs:[],val:''};
    }
    async getGIF(){
        const x = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.props.match.params.name}&api_key=bwhrD5ikLdXQQTDsFx547Q4Q3DsNwoN1&limit=10`)
        this.setState({gifs:[...x.data.data],val:this.props.match.params.name})
    }
    render(){
        const {name} = this.props.match.params;
        const styles = {
            primaryHeading:{
                textAlign: "center"
            },
            giphyContainerSearch:{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start"
            }
        }
        if(this.state.val !== name){
            this.getGIF()
        }
        return (<Container>
            <h3 style={styles.primaryHeading}>{name} GIF'S</h3>
            <div style={styles.giphyContainerSearch}>
              { this.state.gifs.length === 0 ? <span>&nbsp;&nbsp;</span>:this.state.gifs.map((e)=><Giphy imgSrc={e.images.fixed_width}/>)}
            </div> 
        </Container>)
        
    }
}

export default Radium(Category);