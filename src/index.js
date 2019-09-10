import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import Register from './components/Register'
import AppNav from './components/appNav';
import AppNav2 from './components/AppNav2'
import Leaders from './components/allLeaders'
import RegisterBase from './components/RegisterBase'
import Bases from './components/AllBases'
import Home from './components/Home'

ReactDOM.render(
    <Router name="Albert">
    <div 
        className="container-fluid"
        style={{
        margin: 0,
        padding: 0,
        height: '100%'
    }}>

        <div className="col-sm-12" style={{
            padding: 0
        }}>
            <div
                className="col-sm-2"
                style={{
                backgroundColor: 'rgb(17, 26, 40)',
                height: '100%',
                position: 'fixed',
                zIndex: 100,
                padding: 0
            }}>
                <AppNav></AppNav>
            </div>
            <div
                className="col-sm-10"
                style={{
                float: 'right',
                padding: 0,
                height: '100%'
            }}>
                <AppNav2 ></AppNav2>
                <Switch>

                    <Route exact path="/Register" component={Register}/>
                    <Route path="/Leaders" component={Leaders}/>
                    <Route path="/RegisterBase" component={RegisterBase}/>
                    <Route path="/Bases" component={Bases}/>
                    <Route path="/" component={Home}/>

                </Switch>
            </div>
        </div>

    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
