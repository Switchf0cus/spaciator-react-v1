import React from "react";
import { Box, Typography } from "@material-ui/core";
import TheFiveWs from "./theFiveWs";
import { makeStyles } from "@material-ui/styles";
import FullImage from "../../images/bgImages/header.png";
import CoinButton from "./coinButton";

const useStyles = makeStyles((theme) => ({
  Title: {
    height: "110vh",
    backgroundImage: `url(${FullImage})`,
    // backgroundAttachment: 'fixed',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  TitleContainer: {
    paddingTop: "400px",
  },
  trailerDiv: {
    margin: "auto",
    width: '45vw',
    height: '50vh',
    paddingTop: '3rem',
  },
  IntroText: {
    width: '40vw',
    // backgroundColor: '#4a4949',
    padding: '1.5rem',
    // boxShadow: 'inset 0 0 10px #dac22c',
    margin: 'auto',
    marginTop: '2rem',
    color: '#dedddb',
    // borderRadius: '6px'
    },
    IntroTextText: {
      fontFamily: 'Retro Gaming',
      fontSize: '1.2rem',
    },
    TextHighlight1: {
      color: '#a92cde',
    },
    TextHighlight2: {
      color: '#dac22c',
    }
}));

const HeaderContainer = (props) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.Title}>
      <Box className={classes.TitleContainer} component="div">
        {/* <TheFiveWs className={classes.thefiveTitle} />*/}
        <Box component="div" className={classes.IntroText}>
          <Typography className={classes.IntroTextText}>
          Follow the story of Bob Bobster, the legendary <span className={classes.TextHighlight1}>"Spaciator"</span>, 
          on his <span className={classes.TextHighlight2}>interplanetary mission</span> to find his best friend Jim Jimster! <br></br>
          Collect artifacts to empower the <span className={classes.TextHighlight2}>sentient weapon</span> you discover on the planet by shooting the hostile enemies that stand in your way. <br></br> <br></br>
          <span className={classes.TextHighlight1}>Will you ever see your best friend again?</span> Where are the enemies coming from? What is this sentient weapon you've discovered?
          <br></br>
          <span className={classes.TextHighlight2}>Sign up below to start your journey!</span>
          </Typography>
        </Box>
        <CoinButton /> 
        {/* <div className={classes.trailerDiv}>
              <iframe
              width="100%"
              height="100%"
                src="https://www.youtube.com/embed/hLbNd9SyoQo"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}

      </Box>
    </Box>
  );
};

export default HeaderContainer;
