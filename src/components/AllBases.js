import React, {Component} from 'react';
import ViewBase from './ViewBase'
import { Route,NavLink, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


const axios = require('axios');

export default class Basess extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bases: [],
            isLoading: true,
            baseView: {
                Name: '',
                leaderId:'',
                leaderName:' -- ',
                baseId:''
            },
            members:[],
            showBaseView:false
        }
    }

    componentDidMount() {
        this.getBases()
    }

    getMembers=()=>{
        try{
            axios({
                method:'',
                url:`api/rider2/${this.state.baseView.baseId}/`,
            }).then((res)=>{
                this.setState({
                    members:res.data
                })
               // alert("niccee")
            })

        }catch(e){
console.log(e.data.message)
        }
    }

    getBaseLeader=()=>{
        try{

            axios({
                method:"GET",
                url:`api/leaders2/${this.state.baseView.leaderId}`,
            }).then((res)=>{
this.setState({
    baseView: {
        Name: this.state.baseView.Name,
        leaderName:res.data.Name
    }
   
})
//alert(this.state.leaderName)
            })

        }catch(e){
            console.log(e)
        }
    }

    baseClicked = (baseName,leaderId,baseId) => {
       

        this.setState({
            showBaseView:true,
            baseView: {
                Name: baseName,
                leaderId:leaderId,
                baseId:baseId
            }
        })

        //alert(this.state.baseView.baseId)

        
        setTimeout(() => {
            this.getBaseLeader()
            this.getMembers()
        }, 1000);

        // alert(this.state.baseView.Name)
    }

    getBases = async() => {

        try {
            await axios({method: "GET", url: 'api/bases'}).then((res) => {

                this.setState({bases: res.data, isLoading: false})

                console.log(this.state.bases)

                // get base leader name try {     axios({method: "GET", url: 'api/leaders'}) }
                // catch (err) {}
            })

        } catch (err) {}
    }
    render() {
        return (
            <div className="col-sm-12" style={{marginBottom:20}}>
                <h2>All Bases <span className="badge">{this.state.bases.length}</span></h2>
              
                <NavLink activeClassName="active" to="/RegisterBase" className="btn btn-primary" style={{float:'right',marginTop:20}} href=""><i className="fa fa-plus"></i> Add</NavLink>
             
                <div className="col-sm-12" style={{marginTop:15}}>
                    <div className="row">
                        <div className="col-sm-7">
                            {this.state.isLoading 
                                ? <p>Loading</p>
                                : <div
                                    style={{
                                    backgroundColor: 'white',
                                    padding: 10,
                                    height: 500
                                }}
                                    class="col-sm-12 table-responsive">
                                    <table class="table table-stripped table-hover table-condensed">
                                        <thead>
                                            <th style={{padding:5}}>Name</th>
                                            <th style={{padding:5}}>Action</th>

                                        </thead>
                                        <tbody>
                                            {this
                                                .state
                                                .bases
                                                .map(base => {
                                                    return (

                                                        <tr>
                                                            <td>{base.Name}</td>
                                                            <td>
                                                                <button style={{borderColor:'transparent',color:'#205bb0'}} onClick={() => this.baseClicked(base.Name,base.base_leader,base.id)} className="btn btn-default">
                                                                   <i className="fa fa-eye" style={{color:'#205bb0'}}></i> View
                                                                </button>
                                                            </td>

                                                        </tr>

                                                    )
                                                })
}
                                        </tbody>
                                    </table>
                                </div>
}
                        </div>
                        <div className="col-sm-5">
                            {this.state.showBaseView
                                ? <ViewBase members={this.state.members} baseName={this.state.baseView.Name} baseLeader={this.state.baseView.leaderName}></ViewBase>
                                : null
}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
