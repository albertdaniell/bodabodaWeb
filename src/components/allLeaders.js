import React, {Component} from 'react';
const axios = require('axios');

class Leaders extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leaders: [],
            isLoading:true
        }
    }

    componentDidMount() {
        this.getLeaders()
    }

    getLeaders = async() => {

        try {
            await axios({method: "GET", url: 'api/leaders'}).then((res) => {

                this.setState({leaders: res.data,isLoading:false})

                console.log(this.state.leaders)
            })

        } catch (err) {}
    }
    render() {
        return (
            <div className="col-sm-12">
                <h2>All Leaders <span className="badge">{this.state.leaders.length}</span></h2>
                <hr></hr>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-7">
                    {
                   this.state.isLoading?
                   <p>Loading</p>
                   : <div style={{backgroundColor:'white',padding:10}} class="col-sm-12 table-responsive">
                    <table class="table table-stripped table-hover">
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Base</th>
                        </thead>
                        <tbody>
                            {this
                                .state
                                .leaders
                                .map(leader => {
                                    return (
                                        <tr>
                                            <td>{leader.Name}</td>
                                            <td>{leader.Email}</td>
                                            <td>{leader.phone_number}</td>

                                        </tr>

                                    )
                                })
}
                        </tbody>
                    </table>
                </div>
               }
                    </div>
                    <div className="col-sm-5"></div>
                </div>
            </div>
            </div>
        );
    }
}

export default Leaders;
