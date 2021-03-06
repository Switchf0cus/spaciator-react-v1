import React, { useCallback, useState } from "react";
import RunningBob from "../../images/Bob_running.gif";
import { makeStyles } from "@material-ui/styles";
import { ButtonBase } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  CoinGifSize: {
    backgroundImage: `url(${RunningBob})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "220px",
    height: "100px",
    borderRadius: "20px",
    backgroundColor: "#a92cde",
    // marginTop: '80px',
    borderBottom: "6px inset rgba(0,0,0,.5)",
    borderLeft: "6px inset rgba(0,0,0,.5)",
    borderRight: "6px inset rgba(255,255,255,.5)",
    borderTop: "6px inset rgba(255,255,255,.5)",
    boxSizing: "border-box",
    color: "white",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "2.3rem",
    // margin: "1rem",
    minWidth: "200px",
    // padding: ".3rem",
    textTransform: "uppercase",
    // '& :onclick': {
    //     borderBottom: '4px inset rgba(0,0,0,.9)'
    // }
  },
  // ClickMeModal: {
  //   fontFamily: 'Retro Gaming',
  //   color: '#dac22c',
  // },
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
      //   textShadow: ' 0 0 2px #dac22c',
      fontFamily: "Retro Gaming",
      width: "75%",
    },
    //   "& .MuiFormControl-fullWidth": {
    //       borderRadius: '5px',
    //   },
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
    // "& .MuiInputBase-root" :{
    //     width: '60%',
    //     // backgroundColor: '#666666'
    //     borderRadius: '5px',
    //     marginLeft: '10%',
    // },

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

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ marginTop: "5%", backgroundColor: "#dedddb" }}
      >
        Sign-Up
      </Button> */}
      <ButtonBase
        variant="outlines"
        color="primary"
        disableRipple={false}
        className={classes.CoinGifSize}
        onClick={handleClickOpen}
        style={{ marginTop: "1%" }}
        // onClick={() => { console.log('onClick'); }}
      >
        <span className={classes.CoinText}>Sign-Up!</span>
      </ButtonBase>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.root}
        // onShow={ () => {this.textInput.focus(); }}
      >
        <DialogTitle>Sign-Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign-Up in order to acess further details :)
          </DialogContentText>
          {/* <AnimateRun/> */}
          {/* <SmallAnimationRun/> */}
          <TextField
            // ref={ (input) => {this.textInput = input; }}
            margin="dense"
            id="name"
            label="Username"
            type="name"
            fullWidth
            autoComplete="off"
            style={{
              backgroundColor: "#dedddb",
              width: "60%",
              borderRadius: "7px",
              marginLeft: "10%",
            }}
          />
          <TextField
            margin="dense"
            id="name"
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
            margin="dense"
            autoComplete="off"
            id="name"
            label="Email"
            type="name"
            fullWidth
            style={{
              backgroundColor: "#dedddb",
              width: "60%",
              borderRadius: "7px",
              marginLeft: "10%",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Sign-Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// export default function SpinningCoin(item) {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//       setOpen(true);
//   };
//   const handleClose = () => {
//       setOpen(false);
//   };
//   return (
//     <ButtonBase
//       className={classes.CoinGifSize}
//         onChange={handleOpen}
//       style={{ marginTop: "50px" }}
//     >
//       <Typography className={classes.CoinText} component="h3">
//         Click Me!
//       </Typography>
//     </ButtonBase>
//   );
// }
