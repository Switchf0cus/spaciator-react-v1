import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./first-content-style.scss";

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        width: '100%',
        border: '3px solid red',
        height: '100vh',
        display: 'flex',
        backgroundColor: '#dedddb',
    },
    ContentContainer: {
        border: '3px solid blue',
        width: '70%',
        height: '65vh',
        margin: 'auto',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap', 
    },
    TitleBox: {
        width: '100%',
        height: '20%',
        border: '5px solid red',
    },
    Title:{
        fontSize: '2rem',
        border: '3px solid green',
        height: '100%',
        width: '100%',
        padding: '2rem',
        fontFamily: 'Retro Gaming',

    },
    DescriptionBox: {
        width: '100%',
        height: '70%',
        border: '3px solid',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    Description: {
        fontSize: '1.8rem',
        fontFamily: 'Brass Mono Comfortable',
        border: '6px solid green',
        height: '100%',
    },
    RetroFont: {
        fontFamily: 'Retro Gaming',
        color: '#dac22c',
    }
}));

function FirstContentContainer() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.MainContainer}>
        <Box component="div" className={classes.ContentContainer}>
            <Box className={classes.TitleBox}>
              <Typography variant="h3" className={classes.Title}>What?</Typography>
            </Box>
            <Box className={classes.DescriptionBox}>
              <Typography variant="h4" className={classes.Description} className="Description"
              style={{fontFamily: 'Brass Mono Comfortable'}}>
              Welcome to <span className={classes.RetroFont}>Spaciator Unleashed !</span> <br></br>
              We are Nitrate Studios aka. <span className={classes.RetroFont} className="glow-2">NO3</span> <br></br>
              Currently developing a single player game. <br></br>
              Find a trailer down below <span className={classes.RetroFont} className="glow-3">:)</span>  
              </Typography>
            </Box>
        </Box>
    </Box>
  );
}

export default FirstContentContainer;
