import React, {Component} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { BorderColor } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
// import SpinningCoin from './coin-image-component';
import SimpleModal from './modal-component';
import FormDialog from './coin-image-component';

const useStyles = makeStyles((theme)=>({
    ButtonComponent: {
        // backgroundImage: `url(${CoinImage})`,
        // backgroundColor: '#a92cde',
        // backgroundAttachment: 'fixed',
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "100%",
        border: 'none',
        // marginTop: '80px',
    },
}));

function CoinButton() {
    const classes = useStyles();
    return(
        
        <FormDialog/>
            // <SpinningCoin className={classes.ButtonComponent}/>
            // <SimpleModal></SimpleModal>

      

    )
}

export default CoinButton;