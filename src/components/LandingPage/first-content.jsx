import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./first-content-style.scss";
import SimpleAccordion from "./theThreeWs-component";
import FooterCoin from "./footer-coin";
import HubSpotForm from 'react-hubspot-form';

const useStyles = makeStyles((theme) => ({
  ContentContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    scrollSnapType: "masnatory",
  },
  FirstContainer: {
    width: "100%",
    height: "100vh",
  },
  ContentBox: {
    width: "100%",
    height: "100vh",
    scrollSnapAlign: "start",
  },
  TitleBox: {
    width: "100%",
    height: "15%",
    paddingTop: "8rem",
  },
  Title: {
    fontSize: "3rem",
    height: "100%",
    width: "100%",
    fontFamily: "Retro Gaming",
    border: "3px solid black",
  },
  DescriptionBox: {
    width: "60%",
    height: "85%",
    margin: "auto",
    // border: '3px solid',
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  Description: {
    // border: '6px solid green',
    height: "80%",
  },
  RetroFont: {
    fontFamily: "Retro Gaming",
    color: "#dac22c",
  },
  ThreeContentsContainer: {
    width: "100%",
    height: "100%",
  },
  ThreeContents: {
    width: "70%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    margin: "auto",
    paddingTop: "15%",
    paddingBottom: "10%",
  },
  trailerDiv: {
    margin: "auto",
    // border: '3px solid red',
    width: '100%',
    height: '70%'
  },
  FormStyles: {
    width: '50%',
  },
  "& .hs-form-c8320540-0730-4706-9ea1-5ccc7b98c13f_0581dee3-ca74-423c-a1a9-75fc4d2cdbc4.hs-form": {
    width:' 50%'
  }
}));

function FirstContent() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.ContentContainer}>
      <Box component="div" className={classes.ContentBox}>
        <Box
          component="div"
          className="FirstContainer"
          style={{ height: "100vh" }}
        >
          <Box className={classes.TitleBox}>
            <Typography
              variant="h2"
              className={classes.Title}
              className="Title-2"
              style={{ fontFamily: "Retro Gaming", color: "#dac22c" }}
            >
              What?
            </Typography>
          </Box>
          <Box className={classes.DescriptionBox}>
            <Typography
              variant="h4"
              className={classes.Description}
              className="Description"
              style={{
                fontFamily: "Brass Mono Comfortable",
                color: "#fff",
                backgroundColor: "#4a4949",
                fontSize: ".7rem",
                margin: "auto",
                minWidth: "300px",
              }}
            >
              Welcome to{" "}
              <span className={classes.RetroFont}>Spaciator Unleashed !</span>{" "}
              <br></br>
              We are Nitrate Studios aka.{" "}
              <span className={classes.RetroFont} className="glow-2">
                NO3
              </span>{" "}
              <br></br>
              Currently developing a single player game. <br></br>
              Find a trailer down below{" "}
              <span className={classes.RetroFont}>:)</span>
            </Typography>
          </Box>
        </Box>
        <Box
          component="div"
          className={classes.ContentContainer}
          className="ContentContainer-2"
          style={{
            height: "100vh",
          }}
        >
          <Box className={classes.TitleBox}>
            <Typography
              variant="h3"
              className={classes.Title}
              className="Title-2"
              style={{ fontFamily: "Retro Gaming", color: "#dac22c" }}
            >
              Latest Trailer
            </Typography>
          </Box>
          <Box className={classes.DescriptionBox}>
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
        <Box
          component="div"
          className={classes.ContentContainer}
          className="ContentContainer-2"
          style={{
            height: "100vh",
          }}
        >
          <Box className={classes.TitleBox}>
            <Typography
              variant="h3"
              className={classes.Title}
              className="Title-2"
              style={{ fontFamily: "Retro Gaming", color: "#dac22c" }}
            >
              When?
            </Typography>
          </Box>
          <Box className={classes.DescriptionBox}>
            <Typography
              variant="h4"
              className={classes.Description}
              className="Description"
              style={{
                fontFamily: "Brass Mono Comfortable",
                color: "#fff",
                backgroundColor: "#4a4949",
                fontSize: ".7rem",
                margin: "auto",
                minWidth: "300px",
                padding: "2rem",
              }}
            >
              As of now the official relese date has not yet been decided on.{" "}
              <br></br>
              However, in the coming days we are sending out{" "}
              <span className="glow-">alpha</span> versions of the game to a{" "}
              <span className="glow-">limited number of people.</span> <br></br>
              If you would like to know more, sign up to our{" "}
              <span style={{color: '#dac22c', cursor: 'pointer'}} link="newsletter">newsletter</span> <span>:)</span>
            </Typography>
          </Box>
        </Box>

        <Box
          component="div"
          className={classes.ThreeContentsContainer}
          className="ThreeContentsContainer"
        >
          <Box component="div" className={classes.ThreeContents}>
            <SimpleAccordion />
          </Box>
        </Box>
        <FooterCoin  id="newsletter"/>
      </Box>
    </Box>
  );
}

export default FirstContent;
