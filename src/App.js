import React, { useState } from "react";
import Header from "./components/layout/Header";
import Card from "./components/body/Card";
import Footer from "./components/layout/Footer";
import classes from "./App.module.css";
import Notify from "../src/components/Cart/Notify";
import Deposit from "../src/components/Cart/Deposit";

function App() {
  const [isNotifyVisible, setNotifyVisible] = useState(false);
  const [isDepositVisible, setDepositVisible] = useState(false);

  const closeNotifyButtonHandler = () => {
    setNotifyVisible(false);
  };

  const notifyButtonHandler = () => {
    setNotifyVisible(true);
  };

  const closeDepositButtonHandler = () => {
    setDepositVisible(false);
  };

  const depositButtonHandler = () => {
    setDepositVisible(true);
  };

  return (
    <div className={classes.app}>
      {isNotifyVisible && <Notify closeNotify={closeNotifyButtonHandler} />}
      {isDepositVisible && <Deposit closeDeposit={closeDepositButtonHandler} />}

      <Header />
      <Card
        openNotify={notifyButtonHandler}
        openDeposit={depositButtonHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
