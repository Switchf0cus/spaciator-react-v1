import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import CoinImage from '../../images/bgImages/coingif-1.gif';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    ButtonComponent: {
        backgroundImage: `url(${CoinImage})`,
        backgroundColor: '#a92cde',
        height: '120px',
        width: '200px',
        backgroundAttachment: 'fixed',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        borderRadius: '10px'
    }
}));

function CoinButton() {
    const classes = useStyles();
    return(
        <Box
        className={classes.ButtonComponent}
        component="button"
        
        >

        </Box>
    )
}

export default CoinButton;