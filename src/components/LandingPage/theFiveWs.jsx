import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

}));

function TheFiveWs() {
    const classes = useStyles();
    return(
        
        <Box
        component="h1"
        style={{
            fontFamily: 'Retro Gaming',
            fontSize: '6rem',
            color: '#dac22c',
        }}
        >
            The 5 W's
        </Box>
    )
}

export default TheFiveWs;