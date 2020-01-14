import React, { Component } from 'react';
import "./Giphy.css"

class Giphy extends Component{
    render(){
        const {imgsrc} = this.props;
        return (
            <div className="Giphy">
                <img className="Giphy-img" src={imgsrc.url}/>
            </div>
        )
    }
}

export default Giphy;