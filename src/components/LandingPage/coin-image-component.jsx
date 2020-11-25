import React, { useCallback, useState } from 'react';
import SpinningGif from '../../images/bgImages/cropped-coin.gif';
import { makeStyles } from '@material-ui/styles';
import { Typography, ButtonBase } from '@material-ui/core';


// import './coin-image-style.scss';



const useStyles = makeStyles((theme)=> ({
    CoinGifSize: {
        backgroundImage: `url(${SpinningGif})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '220px',
        height: '100px',  
        borderRadius: '20px',
        backgroundColor: '#a92cde',
        marginTop: '80px',
        borderBottom: '6px inset rgba(0,0,0,.5)',
        borderLeft: '6px inset rgba(0,0,0,.5)',
        borderRight: '6px inset rgba(255,255,255,.5)',
        borderTop: '6px inset rgba(255,255,255,.5)',
        boxSizing: 'border-box',
        color: 'white',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '2.2rem',
        margin: '1rem',
        minWidth: '200px',
        padding: '.5rem',
        textTransform: 'uppercase',
        // '& :onclick': {
        //     borderBottom: '4px inset rgba(0,0,0,.9)'
        // }
    },
    CoinText: {
        fontSize: '1.5rem',
        marginLeft: '60px',
        color: '#dac22c',
        fontFamily: 'Retro Gaming'
    },
    ActiveClick: {
        borderBottom: '6px inset rgba(0,0,0,.9)',
        borderLeft: '6px inset rgba(0,0,0,.9)',
        borderRight: '6px inset rgba(255,255,255,.9)',
        borderTop: '6px inset rgba(255,255,255,.9)',
    }
}))

export default function SpinningCoin(item) {
    const classes = useStyles();
    const [activeItem, setActiveItem] = useState("")
    
    const clickHandler = useCallback((itemKey) => () => {
        setActiveItem((itemKey));
    },[]);
    return(
        <ButtonBase
        className={classes.CoinGifSize}
        disableRipple= 'true'
        onClick={clickHandler(item.ActiveClick)}
        >
        <Typography
        className={classes.CoinText}
        component="h3"
        >
            Click Me!
        </Typography>
           
        </ButtonBase>
)
}

