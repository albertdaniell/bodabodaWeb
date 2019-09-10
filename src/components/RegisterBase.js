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
    Toolbar,
    IconButton
} from '@material-ui/core';
const axios = require('axios');

export default class RegisterBase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leaders: [],
            isLoading: false,
            baseName: '',
            baseLeader: '',
            baseNameError: '',
            baseLeaderError: '',
            showAlert:false,
            alertMsg:''

        }
    }

    handleChange1(event) {
        this.setState({baseName: event.target.value})

    }

    handleChange2(leaderId) {
        this.setState({baseLeader: leaderId})

        //alert(this.state.baseLeader)
    }

    componentDidMount() {
        this.getLeaders()
    }

    getLeaders = async() => {

        try {
            await axios({method: "GET", url: 'api/leaders'}).then((res) => {

                this.setState({leaders: res.data, isLoading: false})

                console.log(this.state.leaders)
            })

        } catch (err) {}
    }

    registerBase = async() => {
        this.setState({isLoading: true})
        try {

            await axios({
                method: 'POST',
                url: 'api/bases/',
                data: {
                    Name: this.state.baseName,
                    base_leader: this.state.baseLeader
                }
            }).then(() => {
setTimeout(() => {
    this.setState({isLoading: false,baseName:'', alertMsg:`Base ${this.state.baseName} has been registered successfully!`,showAlert:true})
    this.setState({baseLeaderError: '', baseNameError: ''})

}, 2000);               
            })

        } catch (error) {
            this.setState({isLoading: false})
            var baseNameErr = error.response.data.Name;
            var baseLeaderErr = error.response.data.base_leader;

            if (baseLeaderErr !== undefined || baseNameErr !== undefined) {
                //   alert(baseNameErr)
                console.log(baseNameErr)

                this.setState({baseLeaderError: baseLeaderErr, baseNameError: baseNameErr})
            } else {
                this.setState({baseLeaderError: '', baseNameError: ''})

            }

        }

    }
    render() {
        return (
            <div className="col-sm-12">
                <h2>Register Base</h2>
                <hr></hr>

               {
                   this.state.showAlert?
                   <div class="alert alert-success" role="alert">
                       {this.state.alertMsg}
                       </div>:null
               }

                <div class="form-group">
                    <label for="exampleInputEmail1">Base name {this.state.baseName}</label>
                    <input
                        onChange={(event) => this.handleChange1(event)}
                        value={this.state.baseName}
                        type="text"
                        class="form-control"
                        placeholder="Enter the name of the base"/>
                    <p style={{
                        color: 'red'
                    }}>{this.state.baseNameError}</p>
                </div>

                <label for="exampleInputEmail1">Choose Base Leader</label>

                <select class="form-control">
                    <option value="">Chose Base Leader ***</option>
                    {this
                        .state
                        .leaders
                        .map(leader => {
                            return (
                                <option onClick={() => this.handleChange2(leader.id)}>{leader.Name}
                                    ({leader.Email})</option>

                            )
                        })
}

                </select>
                <p style={{
                    color: 'red'
                }}>{this.state.baseLeaderError}</p>
                <br/> {this.state.isLoading
                    ? <button disabled className="btn btn-default">
                            Loading...
                        </button>
                    : <button onClick={() => this.registerBase()} className="btn btn-primary">
                        Register base
                    </button>
}

            </div>
        );
    }
}
