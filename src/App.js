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
            <div className="">
              
       
                <Grid container>

                    <Grid item xs={2}>
                
                      <AppNav/>
                    </Grid>

                    <Grid item xs={10}>
                       

                            <Typography
                                component="div"
                                style={{
                                backgroundColor: '#cfe8fc',
                                height: '100vh'
                            }}>
                            <AppNav2></AppNav2>
                               <Container style={{marginTop:20}}>

                         

                                <Register></Register>

                            
                               </Container>
                            </Typography>

                    
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default App;
