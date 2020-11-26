import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '@material-ui/core/styles';
import Header from '../../images/bgImages/header.png';
import ImageHeader from '../main-header-component.jsx';
import HeaderBox from './header-component';
import TheFiveWs from './theFiveWs';
import SpinningCoin from './coin-image-component';
import HeaderContainer from './header-component';

const useStyles = makeStyles((theme) =>({
    MainHeader: {
        width: '100vw',
        height: '100vh',
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
        <HeaderContainer/>
        // <div className={classes.MainHeader}>
        //     <img className={classes.HeaderImage} src={Header} alt="Main Header Image"/>
          
        // </div>
        // <HeaderBox/>
        
    )
}