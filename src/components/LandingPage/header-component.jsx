import React from "react";
import { Box } from "@material-ui/core";
import Image from "../../../src/images/bgImages/spaciator-dim-background.png";
import ImageTitle from "../../../src/images/bgImages/spaciator_title.png";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=>({
  Title: {
    height: '100%',
    backgroundRepeat: 'no-repeat' 
  },
  TitleContainer: {
    zIndex: 2
  }
}))

const HeaderContainer = (props) => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      className="header-container"
      style={{
        height: "100vh",
        display: 'flex',
        justifycContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex:1
      }}
    >
      <Box
      className={classes.TitleContainer}
      component="div"
        // style={{
        //   backgroundImage: `url(${Image})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "contain",
        //   height: "100%"
        // }}
      >
        <Box
        className={classes.Title}
        component="div"
        style={{
          backgroundImage: `url(${ImageTitle})`,
          width: '100%',
          height: '100%',
          left: 'auto',
        }}>
        </Box>
       
      </Box>
    </Box>
  );
};

export default HeaderContainer;
