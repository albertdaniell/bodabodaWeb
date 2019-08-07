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
    Divider
} from '@material-ui/core';

class AppNav extends Component {
    render() {
        return (
            <div className="">
                <h3 style={{
                    marginLeft: 15
                }}>Boda Boda App</h3>
                <Divider/>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>

                        <ListItemText primary="Base Leaders"/>
                    </ListItem>

                    <ListItem button>

                        <ListItemText primary="All bases"/>
                    </ListItem>
                    <ListItem button>

                        <ListItemText primary="Register Leaders"/>
                    </ListItem>

                    <ListItem button>

                        <ListItemText primary="Register Base"/>
                    </ListItem>
                </List>

            </div>
        );
    }
}

export default AppNav;
