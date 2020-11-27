import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./first-content-style.scss";
import { Transform } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        width: '100%',
        // border: '3px solid red',
        height: '120vh',
        display: 'flex',
        backgroundColor: '#dedddb',
    },
    ContentContainer: {
        // border: '3px solid blue',
        width: '100%',
        height: '75vh',
        margin: 'auto',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap', 
        justifyContent: 'center',
    },
    TitleBox: {
        width: '100%',
        height: '15%',
        // border: '5px solid red',
    },
    Title:{
        fontSize: '2rem',
        // border: '3px solid green',
        height: '100%',
        width: '100%',
        padding: '2rem',
        fontFamily: 'Retro Gaming',

    },
    DescriptionBox: {
        width: '60%',
        height: '85%',
        margin: 'auto',
        // border: '3px solid',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(169,44,222,0.2)',
        transformOrigin: 'top left',
        // transform: 'skewY(5deg)',
        // boxShadow: '0px 15px 70px #666666',
        // background: 'rgb(169,44,222)',
        // background: 'radial-gradient(circle, rgba(169,44,222,1) 0%, rgba(169,44,222,0.14469537815126055) 100%)',
        // background: 'rgb(169,44,222)',
        // background: 'radial-gradient(circle, rgba(169,44,222,1) 0%, rgba(169,44,222,0.06906512605042014) 27%)',
        // background: 'rgb(169,44,222)',
        // background: 'radial-gradient(circle, rgba(169,44,222,1) 20%, rgba(222,221,219,1) 47%)',
        background: 'rgb(169,44,222)',
        background: 'radial-gradient(circle, rgba(169,44,222,0.5256477591036415) 15%, rgba(222,221,219,1) 45%)',
    },
    Description: {
        // border: '6px solid green',
        height: '80%',
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
              style={{fontFamily: 'Brass Mono Comfortable', color: '#fff', backgroundColor: '#4a4949', fontSize: '.7rem',
              margin: 'auto', minWidth: '300px',}}>
              Welcome to <span className={classes.RetroFont}>Spaciator Unleashed !</span> <br></br>
              We are Nitrate Studios aka. <span className={classes.RetroFont} className="glow-2">NO3</span> <br></br>
              Currently developing a single player game. <br></br>
              Find a trailer down below <span className={classes.RetroFont}>:)</span>  
              </Typography>
            </Box>
        </Box>
    </Box>
  );
}

export default FirstContentContainer;
