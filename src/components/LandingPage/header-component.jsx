import React from "react";
import { Box } from "@material-ui/core";
import TheFiveWs from './theFiveWs';
import { makeStyles } from '@material-ui/styles';
import FullImage from '../../images/bgImages/header.png';
import CoinButton from './coinButton';

const useStyles = makeStyles((theme)=>({
  Title: {
    height: "100vh",
    backgroundImage: `url(${FullImage})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  TitleContainer: {
    paddingTop: '400px'
  }
}))

const HeaderContainer = (props) => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      className={classes.Title}
      style={{
       
      }}
    >
      <Box
      className={classes.TitleContainer}
      component="div"
      >
      <TheFiveWs className={classes.thefiveTitle}/>
      <CoinButton/>
      </Box>
    </Box>
  );
};

export default HeaderContainer;
