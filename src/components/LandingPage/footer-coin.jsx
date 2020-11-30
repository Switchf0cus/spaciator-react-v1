import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import coinButton from './coinButton';

const useStyles = makeStyles((theme)=> ({
    FooterContainer:{
        width: '100%',
        height: '20vh',
        backgroundColor: '#4a4949',
    }
}));

function FooterCoin() {
    const classes = useStyles();

    return(
        <Box component="div" className={classes.FooterContainer}>
            
        </Box>
        
    );
}

export default FooterCoin;