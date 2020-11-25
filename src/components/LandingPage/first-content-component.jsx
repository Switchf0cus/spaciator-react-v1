import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=>({
    TitleContainer: {
        margin: 'auto',
        width: '80%',
    },
    FirstTitleBox: {
        clipPath: 'ploygon(12% 5%, 90% 23%, 100% 100%, 0% 100%)'

    },
    FirstContentText: {
        margin: 'auto'
    }
}))

function FirstContentContainer() {
    const classes = useStyles();
    return(
        <Box
        component="div"
        className={classes.TitleContainer}
        >
            <Typography
            variant="h3"
            >
                What?
            </Typography>
            <Typography
            variant="h5"
            >
                <span>Welcome to Spaciator Unleashed <br/></span>
                <span>We are Nitrate Studios, aka. NO3 <br/></span>
                <span>Currently developing a cross platform single player game <br/></span>
                <span>Trailer of the game below</span>
                </Typography>
        </Box>
    )
}

export default FirstContentContainer; 