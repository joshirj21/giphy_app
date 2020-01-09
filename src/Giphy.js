import React, { Component } from 'react';

class Giphy extends Component{
    render(){
        const {imgsrc} = this.props;
        return (
            <div style={{float:"left"}}>
                <img src={imgsrc.url}/>
            </div>
        )
    }
}

export default Giphy;