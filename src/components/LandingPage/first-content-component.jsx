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
    Title:{
        fontSize: '2rem',
        border: '3px solid pink',
        height: '20%',
        width: '25%',
        marginTop: '5%',
        fontFamily: 'Retro Gaming',

    },
    Description: {
        fontSize: '1.8rem',
        margin: 'auto',
        fontFamily: 'Brass Mono Comfortable',
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
            <Typography variant="h3" className={classes.Title}>What?</Typography>
            <Typography variant="h4" className={classes.Description} className="Description">
              Welcome to <span className={classes.RetroFont} className="glow">Spaciator Unleashed !</span> <br></br>
              We are Nitrate Studios aka. <span className={classes.RetroFont} className="glow">NO3</span> <br></br>
              Currently developing a single player game. <br></br>
              Find a trailer down below <span className={classes.RetroFont} className="glow">:)</span>  
            </Typography>
        </Box>
    </Box>
  );
}

export default FirstContentContainer;
