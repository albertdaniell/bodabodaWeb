import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Container, Typography, Grid, Paper,AppBar} from '@material-ui/core';
import AppNav from './components/appNav'
import AppNav2 from './components/AppNav2'
import Register from './components/Register'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-12">
                <div className="col-sm-2">
            <AppNav></AppNav>
                </div>
                <div className="col-sm-10">
           <Register></Register>
                </div>
                    </div>
                </div>
              
{/*        
                <Grid container style={{height:'100%'}}>

                    <Grid item xs={2} style={{backgroundColor:'red'}}>
                
                      <AppNav/>
                    </Grid>

                    <Grid item xs={10} style={{backgroundColor:'#cfe8fc',height:'100%'}}>
                       

                            <Typography
                                component="div"
                                style={{
                                
                                height: '100%'
                            }}>
                            <AppNav2></AppNav2>
                               <Container style={{marginTop:20}}>

                         

                                <Register></Register>

                            
                               </Container>
                            </Typography>

                    
                    </Grid>
                </Grid> */}

            </div>
        );
    }
}

export default App;
