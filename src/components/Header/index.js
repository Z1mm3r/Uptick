import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../media/logo.png'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    appBar:{
      backgroundColor: 'White',
    },
    menuButton: {
      color: 'Black',
      marginRight: theme.spacing(2),
    },
    title: {
      color: 'darkblue',
      flexGrow: 1,
    },
    image: {
        width: 250,
    },
  }));

export default function Header(props){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" size="medium">
                    <MenuIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <img src={logo} className={classes.image}/>
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );

}