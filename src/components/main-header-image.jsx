import React from 'react';
import HeaderBox from './Landingpage/header-component';
import HeaderTitle from './Landingpage/header-title-img';
import { makeStyles } from '@material-ui/styles';
 
const useStyles = makeStyles((theme) => ({
    Container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
}))

export default function HeaderImage(){
    const classes = useStyles();
    return(

        <HeaderBox className={classes.Container}>
            <HeaderTitle/>
        </HeaderBox>
        
    )
}