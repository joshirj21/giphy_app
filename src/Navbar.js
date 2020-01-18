import React, { Component } from 'react';
import "./Navbar.css"
import Navbar from 'react-bootstrap/Navbar'
import {Link,NavLink} from "react-router-dom"
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"

class MyNavbar extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><NavLink className="NavLink" activeClassName="NavLink-active" exact to="/">GIF_APP</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link><NavLink className="NavLink" activeClassName="NavLink-active" exact to="/Entertainment">Entertainment</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="NavLink" activeClassName="NavLink-active" exact to="/Sports">Sports</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="NavLink" activeClassName="NavLink-active" exact to="/Stickers">Stickers</NavLink></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink className="NavLink" activeClassName="NavLink-active" exact to="/Liked">Liked</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="NavLink" activeClassName="NavLink-active" exact to="/Saved">Saved</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="NavLink" activeClassName="NavLink-active" exact to="/Profile">Profile</NavLink></Nav.Link>
                    </Nav>                    
                </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default MyNavbar;