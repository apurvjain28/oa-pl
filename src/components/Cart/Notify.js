import React from "react";
import classes from "./Notify.module.css";
import Modal from "../UI/Modal";

const Notify = (props) => {
  return (
    <Modal closeCart={props.closeNotify}>
      <div className={classes.modal_container}>
        <p className={classes.modal_text}>
          Would like to get notified by Playline ?
        </p>
        <input
          className={classes.modal_input}
          type="email"
          placeholder="Enter your email"
        ></input>
        <div className={classes.modal_actions}>
          <button onClick={props.closeNotify}>Submit</button>
          <button onClick={props.closeNotify}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default Notify;
