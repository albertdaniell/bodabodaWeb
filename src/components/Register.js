import React, {Component} from 'react';

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
            nameError: '',
            phoneError: '',
            emailError: '',
            passwordError: ''
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

    registerLeader = async(event) => {
        event.preventDefault()
        // if(this.state.name === '' || this.state.phone === '' || this.state.email ===
        // '' || this.state.password === ''){     alert("Please fill in all fields")
        // return 0; } else{

        try {
            await axios({
                method: 'POST',
                url: 'api/leaders/',
                data: {
                    "Name": this.state.name,
                    "Email": this.state.email,

                    "phone_number": this.state.phone,
                    "password": this.state.password
                }

            })

            alert("Success")

            this.setState({nameError: null, emailError: null, dateError: null, phoneError: null, passwordError: null})

        } catch (error) {
            console.log(JSON.stringify((error.response.data)))
            var nameError = error.response.data.Name
            var EmailError = error.response.data.Email
            var dateError = error.response.data.date
            var passwordError = error.response.data.password
            var phoneError = error.response.data.phone_number
            if (nameError !== undefined || EmailError !== undefined || dateError !== undefined || phoneError !== undefined) {
                //alert("Name error " + nameError)
                this.setState({nameError: nameError, emailError: EmailError, dateError: dateError, phoneError: phoneError, passwordError: passwordError})

            } else if (EmailError !== undefined) {
                // alert("Email error :" +EmailError)
            } else if (dateError !== undefined) {
                //alert("date error :" +dateError)
            } else if (phoneError !== undefined) {
                //alert("phone number error :" +dateError)
            } else if (passwordError !== undefined) {
                alert("password error :" + passwordError)
            }

        }
        // }
    }

    getUser = async() => {
        //alert(0) check to see if a user with the email exists
        try {
            await axios({method: 'GET', url: `api/leaders/${this.state.email}`}).then((res) => {
                if (res.data.Email === this.state.email) {
                    alert("Email exists")
                    return 0;
                }
            })
        } catch (error) {
            console.log("Error is : " + error.response.status)

            if (error.response.status === 404) {
                // alert("User cannot be found")
            }
        }
    }

    render() {
        return (
            <div className="col-sm-12">
                <h2 style={{marginBottom:30}}>Register Base Leaders</h2>
<div className="col-sm-3"></div>

                <div className="col-sm-6" style={{backgroundColor:'#205bb0',padding:10,color:'white'}}>

                    <div className="col-sm-12">
                    <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                        value={this.state.name}
                        onChange={(name) => this.handleChange(name)}
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"/>
                </div>

                <p
                    style={{
                    color: 'red',
                    fontStyle: 'italics'
                }}>{this.state.nameError}</p>

                <div class="form-group">
                    <label for="exampleInputEmail1">Phone</label>
                    <input
                        value={this.state.phone}
                        onChange={(phone) => this.handleChange2(phone)}
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter phone of the base leader"/>
                </div>

                <p
                    style={{
                    color: 'red',
                    fontStyle: 'italics'
                }}>{this.state.phoneError}</p>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                        value={this.state.email}
                        onChange={(email) => this.handleChange3(email)}
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter email of the base leader"/>
                </div>

                <p
                    style={{
                    color: 'red',
                    fontStyle: 'italics'
                }}>{this.state.emailError}</p>

                <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input
                        value={this.state.password}
                        onChange={(password) => this.handleChange4(password)}
                        type="password"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter password of the base leader"/>
                </div>

                <p
                    style={{
                    color: 'red',
                    fontStyle: 'italics'
                }}>{this.state.passwordError}</p>
                <button
                    onClick={(event) => this.registerLeader(event)}
                    className="btn btn-primary">
                    Register
                </button>
                </div>
                    </div>
                

                <div className="col-sm-3"></div>

                {/* <Button
                onClick={()=>this.getUser()}
                    style={{
                    marginTop: 20
                }}
                    variant="contained"
                    color="primary">
                    Get user
                </Button> */}

            </div>
        );
    }
}

export default AppNav;
