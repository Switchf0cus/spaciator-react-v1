import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import './second-style.scss';

const useStyles = makeStyles((theme) => ({

}))

function SecondContent() {
    const classes = useStyles();
    return(
        <Box component="div" className={classes.MainContainer} className="MainContainer">
        <Box className={classes.TitleBox}>
          <Typography variant="h3" className={classes.Title} className="Title" style={{fontFamily: 'Retro Gaming',}}>What?</Typography>
        </Box>
        <Box className={classes.DescriptionBox}>
          <Typography variant="h4" className={classes.Description} className="Description"
          style={{fontFamily: 'Brass Mono Comfortable', color: '#fff', backgroundColor: '#4a4949', fontSize: '.9rem',
          margin: 'auto', minWidth: '300px', padding: '2rem'}}>
              As of now the official relese date has not yet been decided on. <br></br> 
              However, in the coming days we are sending out alpha versions of the game to a limited number of people. <br></br>
              If you would like to know more, sign up to our newsletter <span style={{fontFamily: 'RetroGaming'}}>:)</span>
          </Typography>
        </Box>
    </Box>
    )
}

export default SecondContent;