import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '@material-ui/core/styles';
import Header from '../../images/bgImages/spaciator-dim-background.png';
import ImageHeader from '../main-header-component.jsx';
import HeaderBox from './header-component';

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
        // <div className={classes.MainHeader}>
        //     <img className={classes.HeaderImage} src={Header} alt="Main Header Image"/>
        // </div>
        <HeaderBox/>
        
    )
}