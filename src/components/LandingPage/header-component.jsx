import React from "react";
import { Box } from "@material-ui/core";
import TheFiveWs from './main-header-title';
import { makeStyles } from '@material-ui/styles';
import FullImage from '../../images/bgImages/header.png'

const useStyles = makeStyles((theme)=>({
  Title: {
    display: 'flex',
    height: "100vh",
    justifycContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${FullImage})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
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
      <TheFiveWs/>
       
      </Box>
    </Box>
  );
};

export default HeaderContainer;
