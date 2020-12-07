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
    height: "20vh",
    backgroundColor: "#4a4949",
  },
  
}));

function FooterCoin() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.FooterContainer}>
      <Box component="div" className={classes.root}>
          <TwitterIcon onClick={event => window.location.href='https://twitter.com/NitrateStudios'} />
          <YouTubeIcon onClick={event => window.location.href='https://www.youtube.com/channel/UCgbvrA3LnzTYbX4sX0K3XJw'} />
          <FacebookIcon onClick={event => window.location.href='https://www.facebook.com/Nitrate-Studios-107845914479478'} />
      </Box>
      
    </Box>
  );
}

export default FooterCoin;


// style={{color: '#a92dce', fontSize: '2.5rem', cursor:'pointer'}}