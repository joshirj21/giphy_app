import React, { Component } from 'react';

class Category extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return <h1>This is {this.props.match.params.name} Page</h1>
    }
}

export default Category;