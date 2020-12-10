import React, { useCallback, useState } from "react";
import RunningBob from "../../images/Bob_running.gif";
import { makeStyles } from "@material-ui/styles";
import { ButtonBase, Typography } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useEffect } from "react";

import axios from 'axios';
import useAxios from 'axios-hooks';

const useStyles = makeStyles((theme) => ({
  CoinGifSize: {
    backgroundImage: `url(${RunningBob})`,
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

// function Submit() {
//   var user = document.getElementById("name");
//   var pass = document.getElementById("pswd");

//   document.getElementById("username").value = user;
//   document.getElementById("password").value = pass;

//   document.forms["myform"].Submit();
// }

export default function FormDialog({props}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitRegister = () => {
       fetch("http://www.ugamer.gr/spaciators/register.php?username=" +
      user +
      "&password=" +
      password)
      .then(response => response.json())
      .then( data => console.log(data.text));
  };


  //  if(profile ===  "OKOK")
  //       {
  // alert("Complete");
  //       }
  //       else
  //       {
  //         alert("Failed" + profile);
  //       }
//   const AccessData = async () => {
//     await submitRegister();

//     setProfile(submitRegister.data.text);
//     if(profile ===  "OKOK")
//       {
// alert("Complete");
//       }
//       else
//       {
//         alert("Failed" + profile);
//       }
//   }

  // useEffect(async () => await submitRegister()
  //   setSignup()
  // )
  

  // useEffect(async () => {
  //   const response = await axios("http://www.ugamer.gr/spaciators/register.php?username=" +
  //       user +
  //       "&password=" +
  //       password);
  //   const data = await response.json(response.text);
  //   setSignup(data);
  
  // });

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
      >
        <span className={classes.CoinText}>Sign-Up!</span>
      </ButtonBase>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.root}
      >
        <form
          name="myform"
          method="get"
          action="www.ugamer.gr/spaciators/register.php"
        >
          <input type="hidden" name="username" value={user} />
          <input type="hidden" name="password" value={password} />
        </form>

        <DialogTitle>Sign-Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign-Up in order to acess further details :)
          </DialogContentText>

          <TextField
            value={user}
            onChange={(e) => setUser(e.target.value)}
            margin="dense"
            id="name"
            label="Username"
            type="text"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="dense"
            id="pswd"
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
          <DialogContentText>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitRegister} color="primary">
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
