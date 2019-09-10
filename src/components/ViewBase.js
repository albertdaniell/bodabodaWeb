import React, {Component} from 'react';
const axios = require('axios');

export default class ViewBase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bases: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getBases()
    }

    getBases = async() => {

        try {
            await axios({method: "GET", url: 'api/bases'}).then((res) => {

                this.setState({bases: res.data, isLoading: false})

                console.log(this.state.bases)

                //get base leader name
                // try {
                //     axios({method: "GET", url: 'api/leaders'})
                // } catch (err) {}
            })

        } catch (err) {}
    }
    render() {
        return (
            <div style={{backgroundColor:'white',borderRadius:4}} className="col-sm-12">
                <h4 style={{fontWeight:'bold'}}>Base: {this.props.baseName}</h4>
                <hr></hr>
                <div className="alert-warning" style={{padding:10,marginBottom:10}}>
                <h4>Base Leader : {this.props.baseLeader}</h4>

                </div>
              

               <div className='alert-warning' style={{padding:10,marginBottom:10,borderRadius:4}}>
               <h4>Members ({this.props.members.length})</h4>
               <hr/>

               <table className="table table-condensed">
                   {/* <thead></thead> */}
                   <tbody>
                   {
                   this.props.members.map((member)=>{
                       return(
                           <tr>
                           <td><a href="">{member.Name}</a></td>    
                           <td>{member.PhoneNumber}</td> 

                           </tr>
                       )

                   })
               }  
                   </tbody>
               </table>
              

               </div>
                
            </div>
        );
    }
}
