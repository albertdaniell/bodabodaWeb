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

class AppNav extends Component {
    render() {
        return (
            <div className="">
                <AppBar position="static">
                    <Toolbar variant="dense">

                        <Typography variant="h6" color="inherit">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

export default AppNav;
