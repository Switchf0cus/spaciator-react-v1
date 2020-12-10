import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./first-content-style.scss";
import SimpleAccordion from "./theThreeWs-component";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import HubSpotForm from 'react-hubspot-form';

const useStyles = makeStyles((theme) => ({
  ContentContainer: {
    width: "100vw",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    scrollSnapType: "mandatory",
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
    fontSize: "2vw",
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
    borderRadius: '6px',
    border: '3px solid #dac22c',
    width: '70%',
    height: '50%'
  },
  FormStyles: {
    width: '50%',
  },
  "& .hs-form-c8320540-0730-4706-9ea1-5ccc7b98c13f_0581dee3-ca74-423c-a1a9-75fc4d2cdbc4.hs-form": {
    width:' 50%'
  },
  root: {
    "& .MuiSvgIcon-root": {
        color: '#a92cde',
        fontSize: '2.5rem',
        margin: '1rem',
         "& :hover": {
            color: '#dac22c',
            transform: 'scale(1.1)',
            transition: '300ms'
        }
    },
    "&.MuiBox-root-51": {
        width: '40%',
        height: '100%',
        margin: 'auto',
        paddingTop: '3.2rem',
       
    }
},
FooterContainer: {
width: "100%",
// height: "auto",
backgroundColor: "#4a4949",
padding: '2rem',
},
TextHightlight: {
  color: '#a92cde',
}
}));

function FirstContent() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.ContentContainer}>
      <Box component="div" className={classes.ContentBox}>
        {/* <Box
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
              As seen in the trailer above{" "}
              <span className={classes.RetroFont}>:)</span>
            </Typography>
          </Box>
        </Box> */}
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Box>
        </Box>
        <Box
          component="div"
          className={classes.ContentContainer}
          className="ContentContainer-3"
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
                paddingTop: '2.5rem',
              }}
            >
              As of now the official release date has not yet been decided on.{" "}
              <br></br>
              However, in the coming days we are releasing a{" "}
              <span className={classes.TextHightlight}>beta</span> versions of the game to a{" "}
              <span className="glow-">limited number of people.</span> <br></br>
              If you would like to know more, sign up to our{" "}
              <span style={{color: '#dac22c', cursor: 'pointer'}} link="newsletter">newsletter</span> in the footer <span>:)</span>
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
        {/* <FooterCoin  id="newsletter"/> */}
        <Box component="div" className={classes.FooterContainer}>
      <Box component="div" className={classes.root}>
          <TwitterIcon onClick={event => window.location.href='https://twitter.com/NitrateStudios'} />
          <YouTubeIcon onClick={event => window.location.href='https://www.youtube.com/channel/UCgbvrA3LnzTYbX4sX0K3XJw'} />
          <FacebookIcon onClick={event => window.location.href='https://www.facebook.com/Nitrate-Studios-107845914479478'} />
      </Box>
      <Box style={{ maxWidth: '500px', backgroundColor: '#878682', padding: '2rem', margin: 'auto', border: '2px solid #dac22c'}}>
            <HubSpotForm 
          
            portalId='8765503'
            formId='c8320540-0730-4706-9ea1-5ccc7b98c13f'
          />
          </Box>
      
    </Box>
      </Box>
    </Box>
  );
}

export default FirstContent;
