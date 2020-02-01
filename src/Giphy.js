import React, { Component } from 'react';
import "./Giphy.css";

class Giphy extends Component{
    render(){
        const {imgSrc} = this.props;
        return (
            <div className="Giphy">
                <img src={imgSrc.url}/>
            </div>
        )
    }
}

export default Giphy;