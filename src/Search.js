import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {val:''};
        this.handleValue = this.handleValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleValue(ev){
        this.setState({val:ev.target.value})
    }
    handleSubmit(ev){
        ev.preventDefault();
        this.props.handleSearch(this.state.val);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleValue} value={this.state.val}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Search;