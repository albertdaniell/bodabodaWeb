import React, {Component} from 'react';

import '../App.css'
import { Route,NavLink, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import {
    Button,
    Container,
    Typography,
    Grid,
    Paper,
    AppBar,
    List,
    ListItem,
    ListItemIcon,

    ListItemText,
    Divider
} from '@material-ui/core';

class AppNav extends Component {
    render() {
        return (
            <div className="">
           <div style={{backgroundColor:'black',height:50,alignItems:'center',justifyContent:'center',paddingTop:10}}>
           <h4 style={{
                    marginLeft: 5,color:'white',marginTop:0,color:'orange'
                }}>Boda Boda Admin</h4>
           </div>
                <Divider/>
            <div className="myNav" id="mynav">
            <NavLink exact activeClassName="active" to="/">
            Dashboard {this.props.name}
          </NavLink>

          <NavLink activeClassName="active" to="/Register">
            Register
          </NavLink>

          <NavLink activeClassName="active" to="/Leaders">
            All Leaders
          </NavLink>
          <NavLink activeClassName="active" to="/Bases">
            All Bases
          </NavLink>

          <NavLink activeClassName="active" to="/RegisterBase">
            Register Base
          </NavLink>
          <NavLink activeClassName="active" to="#">
            Transactions
          </NavLink>

         
         
            </div>
            </div>
        );
    }
}

export default AppNav;
