import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme)=> ({
    root:{
        "& .MuiPaper-root" :{
            border: '2px solid #dac22c',
            backgroundColor: '#4a4949',
        },
        "& .MuiFormLabel-root": {
            color: "#a92cde",
            fontFamily: 'Retro Gaming',
            paddingLeft: '10%',
          },
          "& .MuiDialog-paperWidthSm": {
            width: '60vw',
            maxWidth: '600px',
          },
          "& .MuiTypography-colorTextSecondary": {
              color: '#dac22c',
              fontSize: '.8rem',
            //   textShadow: ' 0 0 2px #dac22c',
            fontFamily: 'Retro Gaming',
            width: '75%',
          },
        //   "& .MuiFormControl-fullWidth": {
        //       borderRadius: '5px',
        //   },
          "& .MuiTypography-h6": {
              fontFamily: 'Retro Gaming',
              fontSize: '2rem',
              color: '#a92cde', 
              textShadow: '0px 2px 5px #dac22c'
          },
          "& .MuiInputBase-input": {
              padding: '.5rem',
              fontFamily: 'Retro Gaming',
          },
        // "& .MuiInputBase-root" :{
        //     width: '60%',
        //     // backgroundColor: '#666666'
        //     borderRadius: '5px',
        //     marginLeft: '10%',
        // },
       
        "& .MuiButton-textPrimary":{
            color: '#dac22c',
            fontFamily: 'Retro Gaming',
        },
        "& .MuiButton-root": {
            backgroundColor: '#666666',
        },
        "& .MuiInput-underline::before": {
            borderBottom: '0px',
        },
        "& .MuiInput-underline::after": {
            borderBottom: '0px',
        },
        "& .MuiInput-underline::active": {
            borderBottom: '0px',
        },
    }
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
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ marginTop: "10%", backgroundColor: '#dedddb', }}
      >
        Sign-Up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.root}
      >
        <DialogTitle>
            Sign-Up
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           
              Sign-Up in order to collect the coins that are hidden all over the
              website. <br></br>Using those coins you can activate a map or your
              choice
           
          </DialogContentText>
          {/* <AnimateRun/> */}
          {/* <SmallAnimationRun/> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="name"
            fullWidth
            disableUnderline={true}
            style={{backgroundColor: '#dedddb', width: '60%', borderRadius: '7px', marginLeft: '10%'}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="name"
            fullWidth
            disableUnderline={true}
            style={{backgroundColor: '#dedddb', width: '60%', borderRadius: '7px', marginLeft: '10%'}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="name"
            fullWidth
            disableUnderline={true}
            style={{backgroundColor: '#dedddb', width: '60%', borderRadius: '7px', marginLeft: '10%'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
