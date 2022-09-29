import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {deepOrange} from '@mui/material/colors';

const NavBar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{flexGrow: 2}}>Project Management SW</Typography>
                    <Avatar sx={{bgcolor: deepOrange[500]}} data-testid='counter-avatar'></Avatar>
                </Toolbar>
            </AppBar>

        </div>

    );

}
export default NavBar;