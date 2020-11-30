import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./theThreeWs-style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "& .MuiAccordion-root:before": {
        height: '0px',
    },
    width: "70%",
    borderRadius: "7px",
    margin: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Retro Gaming",
    color: "#dedddb",
  },
  AccordionText: {
    width: "70%",
    margin: "auto",
    padding: "2rem",
    color: "#dedddb",
    fontFamily: "Brass Mono Comfortable",
    fontSize: "1.3rem",
  },
  AccordionDetailsBox: {
    backgroundColor: "#4a4949",
    border: "3px solid #dac22c",
    borderRadius: "5px",
    boxShadow: "inset 0 0 20px #dac22c",
  },
  AccordionSummaryBox: {
    backgroundColor: "#4a4949",
    borderRadius: "5px",
    padding: ".7rem",
    border: "1px solid #a92cde",
    margin: "1rem",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.AccordionMain}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#dac22c" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.AccordionSummaryBox}
        >
          <Typography className={classes.heading}>Who?</Typography>
        </AccordionSummary>
        <AccordionDetails
          className={classes.AccordionDetailsBox}
          className="glow-border"
        >
          <Typography className={classes.AccordionText}>
            We are a team of 5 student developers. <br></br>3 Game Developers{" "}
            <br></br>2 Web Developers
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#dac22c" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.AccordionSummaryBox}
        >
          <Typography className={classes.heading}>Where?</Typography>
        </AccordionSummary>
        <AccordionDetails
          className={classes.AccordionDetailsBox}
          className="glow-border"
        >
          <Typography className={classes.AccordionText}>
            We are all based in the great city of London, capital of the United
            Kingdom.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#dac22c" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.AccordionSummaryBox}
        >
          <Typography className={classes.heading}>Why?</Typography>
        </AccordionSummary>
        <AccordionDetails
          className={classes.AccordionDetailsBox}
          className="glow-border"
        >
          <Typography className={classes.AccordionText}>
            This is a university project we need to work on over the period of
            the whole term. Throughout this module we will be confronted by many real-life
            challanges Developers face, alone or in a team.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
