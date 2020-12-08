import React from "react";
import { Box } from "@material-ui/core";
import TheFiveWs from "./theFiveWs";
import { makeStyles } from "@material-ui/styles";
import FullImage from "../../images/bgImages/header.png";
import CoinButton from "./coinButton";

const useStyles = makeStyles((theme) => ({
  Title: {
    height: "120vh",
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
    paddingTop: '3.5rem',
  },
}));

const HeaderContainer = (props) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.Title}>
      <Box className={classes.TitleContainer} component="div">
        {/* <TheFiveWs className={classes.thefiveTitle} />*/}
        <CoinButton /> 
        <div className={classes.trailerDiv}>
              <iframe
              width="100%"
              height="100%"
                src="https://www.youtube.com/embed/hLbNd9SyoQo"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
      </Box>
    </Box>
  );
};

export default HeaderContainer;
