import React from "react";
import classes from "./Notify.module.css";
import Modal from "../UI/Modal";

const Deposit = (props) => {
  return (
    <Modal closeCart={props.closeDeposit}>
      <div className={classes.modal_container}>
        <p className={classes.modal_text}>Please login to deposit and play.</p>
        <div className={classes.modal_actions}>
          <button onClick={props.closeDeposit}>Login</button>
          <button onClick={props.closeDeposit}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default Deposit;
