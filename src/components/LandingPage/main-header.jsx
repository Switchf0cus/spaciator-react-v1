import React from 'react';
import Title from '../../images/bgImages/spaciator_title.png';
import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from './main-header-image';
const useStyles = makeStyles((theme) => ({

}));

function HeaderAndTitle() {
    const classes = useStyles();
    return(
        <HeaderImage>
            <Title/>
        </HeaderImage>
    )
}

export default HeaderAndTitle;