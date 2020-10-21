import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './main-appbar';
import theme from '@material-ui/core/styles';
import Header from '../../images/bgImages/header.png';

const useStyles = makeStyles((theme) =>({
    MainHeader: {
        width: '100vw',
        height: '100vh'
    },
    HeaderImage: {
        width: '100%',
        height: '100vh'
    }
}));

// console.log(Header)

export default function HeaderImage(){
    const classes = useStyles();
    return(
        <div className={classes.MainHeader}>
            <img className={classes.HeaderImage} src={Header} alt="Main Header Image"/>
        </div>
        
    )
}