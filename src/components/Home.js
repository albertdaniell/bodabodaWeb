import React, {Component} from 'react'
import Members from './Members'
//import Axios from 'axios';
const axios = require('axios');


export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            members:[
                {
                    "Name":"--",
                    "PhoneNumber":'--',
                }
            ]
        }
    }

    getRiders=async()=>{
axios({
    method:'GET',
    url:'api/rider/',
}).then((res)=>{
    this.setState({
        members:res.data
    })
})
        try{

        }catch(e){
console.log(e.data.message)
        }
        
    }

    componentDidMount(){
     setTimeout(() => {
        this.getRiders()
     }, 2000);
    }
    render() {
        return (
            <div className="col-sm-12">
                <h2><i className="fa fa-dashboard"></i> Dashboard</h2>
                <hr></hr>

                <div
                    className="col-sm-12"
                    style={{
                    padding: 0
                }}>
                    <div className="col-sm-3">
                        <div className="panel" style={{backgroundColor:'#0f840fb0',color:'white'}}>
                            <div className="panel-heading" style={{color:'white'}}>
                                <p>Transactions</p>
                            </div>
                            <div className="panel-body">
                                <div className="pull-left">
                                    <h3 style={{color:'white'}}>20</h3>
                                </div>
                                <div className="pull-right" style={{fontSize:40}}>
                                    <i className="fa fa-money"></i>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="panel" style={{backgroundColor:'rgba(15, 112, 132, 0.69)',color:'white'}}>
                            <div className="panel-heading">
                                <p>Riders</p>
                            </div>
                            <div className="panel-body">
                                <div className="pull-left">
                                    <h3>20</h3>
                                </div>
                                <div className="pull-right" style={{fontSize:40}}>
                                    <i className="fa fa-money"></i>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="panel" style={{backgroundColor:'rgba(78, 15, 132, 0.69)',color:'white'}}>
                            <div className="panel-heading">
                                <p>Base Leaders</p>
                            </div>
                            <div className="panel-body">
                                <div className="pull-left">
                                    <h3>20</h3>
                                </div>
                                <div className="pull-right" style={{fontSize:40}}>
                                    <i className="fa fa-briefcase"></i>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="panel" style={{backgroundColor:'rgba(185, 29, 3, 0.69)',color:'white'}}>
                            <div className="panel-heading">
                                <p>Bases</p>
                            </div>
                            <div className="panel-body">
                                <div className="pull-left">
                                    <h3>20</h3>
                                </div>
                                <div className="pull-right" style={{fontSize:40}}>
                                    <i className="fa fa-group"></i>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-sm-12" style={{padding:0}}>
                    <div className="col-sm-8">
                        <h4>Transactions</h4>
                        <hr/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore vel, voluptate a impedit voluptatibus facilis. Recusandae, beatae eius. Voluptas illum earum eligendi possimus exercitationem suscipit repellendus, aliquam ab dolores.</p>

                    </div>
                    <div className="col-sm-4">
                        <h4>Members</h4>
                        <hr/>
                        <Members members={this.state.members}></Members>
                    </div>
                </div>
            </div>
        )
    }

}