import React from "react";
import headerImg from "../../assets/logo/logo@2x.png";
import classes from "./Header.module.css";

const header = () => {
  return (
    <img
      className={classes.headerImg}
      src={headerImg}
      alt="playline-logo"
    ></img>
  );
};

export default header;
