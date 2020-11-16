import React from 'react';
import ImageTitle from '../../../src/images/bgImages/spaciator_title.png';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=> ({
    Title: {
        height: '100%',
        backgroundRepeat: 'no-repeat',
    }
}))

function HeaderTitle() {
    const classes = useStyles();
    return(
        <Box
        component="div"
        >
            <ImageTitle/>
            <Box
            component="p"
            className={classes.Title}
            style={{
                backgroundImage: `url(${ImageTitle})`
            }}
            >
            </Box>
        </Box>
    )
}

export default HeaderTitle;