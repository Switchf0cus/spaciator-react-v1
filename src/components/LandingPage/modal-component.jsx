import React, { useCallback, useState } from "react";
import SpinningGif from "../../images/bgImages/cropped-coin.gif";
import { makeStyles } from "@material-ui/styles";
import { ButtonBase } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TryForm from './form-components/try-form';


const useStyles = makeStyles((theme) => ({
  CoinGifSize: {
    backgroundImage: `url(${SpinningGif})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "220px",
    height: "100px",
    borderRadius: "20px",
    backgroundColor: "#a92cde",
    borderBottom: "6px inset rgba(0,0,0,.5)",
    borderLeft: "6px inset rgba(0,0,0,.5)",
    borderRight: "6px inset rgba(255,255,255,.5)",
    borderTop: "6px inset rgba(255,255,255,.5)",
    boxSizing: "border-box",
    color: "white",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "2.3rem",
    minWidth: "200px",
    textTransform: "uppercase",
  },
  CoinText: {
    fontSize: "1.5rem",
    marginLeft: "60px",
    color: "#dac22c",
    fontFamily: "Retro Gaming",
  },
  ActiveClick: {
    borderBottom: "6px inset rgba(0,0,0,.9)",
    borderLeft: "6px inset rgba(0,0,0,.9)",
    borderRight: "6px inset rgba(255,255,255,.9)",
    borderTop: "6px inset rgba(255,255,255,.9)",
  },
  root: {
    "& .MuiPaper-root": {
      border: "2px solid #dac22c",
      backgroundColor: "#4a4949",
    },
    "& .MuiFormLabel-root": {
      color: "#a92cde",
      fontFamily: "Retro Gaming",
      paddingLeft: "10%",
    },
    "& .MuiDialog-paperWidthSm": {
      width: "60vw",
      maxWidth: "600px",
    },
    "& .MuiTypography-colorTextSecondary": {
      color: "#dac22c",
      fontSize: ".8rem",
      fontFamily: "Retro Gaming",
      width: "75%",
    },
    "& .MuiTypography-h6": {
      fontFamily: "Retro Gaming",
      fontSize: "2rem",
      color: "#a92cde",
      textShadow: "0px 2px 5px #dac22c",
    },
    "& .MuiInputBase-input": {
      padding: ".5rem",
      fontFamily: "Retro Gaming",
    },
    "& .MuiButton-textPrimary": {
      color: "#dac22c",
      fontFamily: "Retro Gaming",
    },
    "& .MuiButton-root": {
      backgroundColor: "#666666",
    },
    "& .MuiInput-underline::before": {
      borderBottom: "0px",
    },
    "& .MuiInput-underline::after": {
      borderBottom: "0px",
    },
    "& .MuiInput-underline::active": {
      borderBottom: "0px",
    },
  },
}));

export default function SignUpForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(

<div>

 <ButtonBase
  variant="outlines"
  color="primary"
  disableRipple={false}
  className={classes.CoinGifSize}
  onClick={handleClickOpen}
  style={{ marginTop: "3%" }}
>
  <span className={classes.CoinText}>Click Me!</span>
</ButtonBase>
<Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="form-dialog-title"
  className={classes.root}
>
  <DialogTitle>Sign-Up</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Sign-Up in order to collect the coins that are hidden all over the
      website. <br></br>Using those coins you can activate a map or your
      choice
    </DialogContentText>
    <TryForm/>

    {/* <TextField
      autoComplete="off"
      margin="dense"
      id="username"
      label="Username"
      type="name"
      fullWidth
      style={{
        backgroundColor: "#dedddb",
        width: "60%",
        borderRadius: "7px",
        marginLeft: "10%",
      }}
    />
    <TextField
    autoComplete="off"
      margin="dense"
      id="password"
      label="Password"
      type="password"
      fullWidth
      style={{
        backgroundColor: "#dedddb",
        width: "60%",
        borderRadius: "7px",
        marginLeft: "10%",
      }}
    />
    <TextField
    autoComplete="off"
      margin="dense"
      id="email"
      label="Email"
      type="name"
      fullWidth
      style={{
        backgroundColor: "#dedddb",
        width: "60%",
        borderRadius: "7px",
        marginLeft: "10%",
      }}
    /> */}

  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
    <Button color="primary">
      Register
    </Button>
  </DialogActions>
</Dialog>
</div>
 )
}