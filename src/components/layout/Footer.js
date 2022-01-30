import React from "react";
import classes from "./Footer.module.css";

const footer = () => {
  return (
    <div className={classes.footer}>
      <a href="/about">ABOUT </a>
      <a href="/plbbonus">| PLB BONUS </a>
      <a href="/contact">| CONTACT </a>
      <a href="/security">| SECURITY </a>
      <a href="/responsibilityplay">| RESPONSIBILITY PLAY </a>
      <a href="/privacy">| PRIVACY </a>
      <a href="/terms">| TERMS </a>
    </div>
  );
};

export default footer;
