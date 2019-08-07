import React, {Component} from 'react';

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
    Divider,
    TextField,
    InputAdornment
    
} from '@material-ui/core';

import Input from '@material-ui/core/Input';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import IconButton from '@material-ui/core/IconButton';
const axios = require('axios');

class AppNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phone: '',
            email: '',
            password: '',
            nameError:'',
            phoneError:'',
            emailError:'',
            passwordError:''
        }
    }
    handleChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleChange2 = (event) => {
        this.setState({phone: event.target.value});
    };

    handleChange3 = (event) => {
        this.setState({email: event.target.value});
    };

    handleChange4 = (event) => {
        this.setState({password: event.target.value});
    };

    registerLeader= async (event)=>{
        event.preventDefault()
        // if(this.state.name === '' || this.state.phone === '' || this.state.email === '' || this.state.password === ''){
        //     alert("Please fill in all fields")

        //     return 0;
        // }

        // else{
    try{
        await axios({
            method:'POST',
            url:'api/leaders/',
            data:{
                "Name":this.state.name,
                "Email":this.state.email,
                
                "phone_number":this.state.phone,
                "password":this.state.password
            }

        })

        alert("Success")
    }catch(error){
        console.log(JSON.stringify((error.response.data)))
var nameError=error.response.data.Name
var EmailError=error.response.data.Email
var dateError=error.response.data.date
var passwordError =error.response.data.password
var phoneError=error.response.data.phone_number
if(nameError !== undefined || EmailError !==undefined || dateError !== undefined || phoneError !== undefined){
   //alert("Name error " + nameError)
   this.setState({
       nameError:nameError,
       emailError:EmailError,
       dateError:dateError,
       phoneError:phoneError,
       passwordError:passwordError
   })

  
}
else if(EmailError !== undefined){
   // alert("Email error :" +EmailError)
}
else if(dateError !== undefined){
    //alert("date error :" +dateError)
}
else if(phoneError !== undefined){
    //alert("phone number error :" +dateError)
}


else if(passwordError !== undefined){
    alert("password error :" +passwordError)
}

    }
        // }
    }

    render() {
        return (
            <div className="">
                <h3 style={{}}>Register Base Leaders {this.state.name} {this.state.phone}</h3>
                <Divider></Divider>

                <TextField
                    value={this.state.name}
                    onChange={(name) => this.handleChange(name)}
                    style={{
                    width: '100%'
                }}
                    id="standard-name"
                    label="Enter name of the base leader"
                    margin="normal"/>

                    <p>{this.state.nameError}</p>

                <TextField
                value={this.state.phone}
                    onChange={(phone) => this.handleChange2(phone)}
                    type="number"
                    style={{
                    width: '100%'
                }}
                    id="standard-name"
                    label="Enter phone of the base leader"
                    margin="normal"/>
                    <p>{this.state.phoneError}</p>
                <TextField
                value={this.state.email}
                    onChange={(email) => this.handleChange3(email)}
                    type="email"
                    style={{
                    width: '100%'
                }}
                    id="standard-name"
                    label="Enter the email address "
                    margin="normal"/>

                    <p>{this.state.emailError}</p>

                <TextField
                value={this.state.password}
                    onChange={(password) => this.handleChange4(password)}
                    type="password"
                    style={{
                    width: '100%'
                }}
                    id="standard-name"
                    label="Enter the password"
                    margin="normal"/>

                    <p>{this.state.passwordError}</p>

                <Button
                onClick={(event)=>this.registerLeader(event)}
                    style={{
                    marginTop: 20
                }}
                    variant="contained"
                    color="primary">
                    Register
                </Button>

            </div>
        );
    }
}

export default AppNav;
