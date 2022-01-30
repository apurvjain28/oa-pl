import classes from "./Card.module.css";
import progress from "../../assets/icons/progress@2x.png";
import Player from "./Player";
import bell from "../../assets/icons/notify-me@3x.png";
import money from "../../assets/icons/money-bag@3x.png";
import googleStore from "../../assets/icons/google-play@3x.png";
import appleStore from "../../assets/icons/ios-app@3x.png";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.progressImage}
        src={progress}
        alt="progress"
      ></img>
      <h2 className={classes.mainHeading}>YOUR PLAYLINE IS SET!</h2>
      <h3 className={classes.secondHeading}>
        COME BACK @ 7:30PM TO TRACK IT LIVE!
      </h3>
      <hr className={classes.hr_card} />

      <p className={classes.tip}>
        ProTip: You can manage your PlayLine's untill they go live in the
        Upcoming area
      </p>
      <Player />
      <div className={classes.buttons}>
        <button onClick={props.openNotify}>
          <img src={bell} alt="notify-me"></img>
          <span>NOTIFY ME</span>
        </button>
        <button onClick={props.openDeposit}>
          <img src={money} alt="deposit"></img>
          <span>DEPOSIT</span>
        </button>
      </div>
      <hr className={classes.hr_card} />
      <div className={classes.thirdHeading}>DOWNLOAD THE APP</div>
      <div className={classes.apps}>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={googleStore} alt="google-store"></img>
        </a>
        <a
          href="https://apps.apple.com/ca/app/playline/id1265657853"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={appleStore} alt="ios-store"></img>
        </a>
      </div>
    </div>
  );
};

export default Card;
