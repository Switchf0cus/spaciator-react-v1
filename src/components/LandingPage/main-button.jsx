import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import theme from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    CoinButton: {
        margin: 'auto',
        backgroundColor: '#dedddb',
        width: '180px',       
    } 
}))

function SimpleButton() {
    const classes = useStyles();
    return(
        <Button className={classes.CoinButton}>Collect Coin</Button>
    );
}

export default SimpleButton;