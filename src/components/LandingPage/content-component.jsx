import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Transform } from "@material-ui/icons";
import './content-style.scss';
import FirstContent from './first-content';

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    ContentContainer: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap', 
        justifyContent: 'center',
    },

}));

function ContentContainer() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.MainContainer} className="AllContent">
            <FirstContent/>
    </Box>
  );
}

export default ContentContainer;
