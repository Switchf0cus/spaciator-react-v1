import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({}));

function TryForm() {
  const classes = useStyles();

  return (
    <div>
      <a href="ugamer.gr/spaciators/register.php"> </a>
      <form action="register.php" method="get">

        <input
          type="text"
          autoComplete="off"
          placeholder="username"
          name="username"
        ></input>
        <br></br>

        <input
          type="password"
          autoComplete="off"
          placeholder="password"
          name="password"
        ></input>
        <br></br>
        <button type="submit"> Register </button>
      </form>
    </div>
  );
}

export default TryForm;
