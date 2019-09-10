import React,{Component} from 'react'

export default class Members extends Component{
    render(){
        return(
            <div>
                <table className="table  table-hover table-boarder" style={{backgroundColor:'white',padding:10,borderRadius:4}}>
                    <thead style={{padding:10}}>
                    <th style={{padding:5,color:'#0f840fb0'}}>Name</th>
                    <th style={{padding:5,color:'#0f840fb0'}}>Phone</th>
                    </thead>

                    <tbody>
                        {
                            this.props.members.map((member)=>{
                                return(
                                   <tr>
                                   <td>{member.Name}</td>
                                    <td>{member.PhoneNumber}</td>
                                   </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}