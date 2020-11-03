import React from "react";
import { Box } from "@material-ui/core";
import Image from "../../../src/images/bgImages/header.png";

const HeaderContainer = (props) => {
  return (
    <Box
      component="div"
      className="header-container"
      style={{
        display: "flex",
        width: "100%",
        height: "100vh"
      }}
    >
      <Box
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "auto",
        }}
      >
        <Box component="div" className="header-description">
          <Box
            component="p"
            style={{
              color: "#dac22c",
              fontSize: "3rem",
            }}
          >
            The Five W's
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderContainer;
