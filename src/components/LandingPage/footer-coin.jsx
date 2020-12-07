import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CoinButton from "./coinButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
    root: {
  "& .MuiSvgIcon-root": {
      color: '#a92cde',
      fontSize: '2rem',
  }
},
  FooterContainer: {
    width: "100%",
    height: "20vh",
    backgroundColor: "#4a4949",
  },
  SocialMediaIcons: {
      width: '40%',
      height: '100%',
      margin: 'auto',
      padding: '4rem',
      paddingLeft: ''
  },
  
}));

function FooterCoin() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.FooterContainer}>
      {/* <CoinButton disabled/> */}
      <Box component="div" className={classes.SocialMediaIcons}>
          <TwitterIcon href="https://twitter.com/NitrateStudios" style={{color: '#a92dce', fontSize: '2.5rem'}}/>
          <YouTubeIcon href="https://www.youtube.com/channel/UCgbvrA3LnzTYbX4sX0K3XJw" style={{color: '#a92dce', fontSize: '2.5rem'}}/>
          <FacebookIcon href="https://www.facebook.com/Nitrate-Studios-107845914479478" style={{color: '#a92dce', fontSize: '2.5rem'}}/>
      </Box>
      
    </Box>
  );
}

export default FooterCoin;
