import React from "react";
import { useState, useCallback, useEffect } from "react";
import classes from "./Player.module.css";

const IMAGE_FILE_NAME = [
  "Lebron-James-PLP59D7092A6F6CEv2.png",
  "Anthony-Davis-PLP59D70938C0B3Ev2.png",
  "Aaron-Gordon-PLP59D7092156491v2.png",
  "Pascal-Siakam-PLP59D70927CC6DD.png",
  "Kawhi-Leonard-PLP59D7093A107E7v2.png",
  "Kyle-Lowry-PLP59D70927DF104.png",
  "Dangelo-Russell-PLP59D709255D994v4.png",
];

const Player = () => {
  const [playersData, setPlayersData] = useState([]);
  const [stats, setStats] = useState("");

  // API called to retrieve players data
  const fetchPlayersData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setPlayersData(data.players);
    } catch (err) {
      throw err;
    }
  }, []);

  // player data is rendered for the first time
  useEffect(() => {
    fetchPlayersData();
  }, [fetchPlayersData]);

  useEffect(() => {
    const stats = playersData.map((player) => {
      const imageFile = IMAGE_FILE_NAME.filter((file) => {
        return file.toLowerCase().includes(player.last_name.toLowerCase());
      });
      const playerImage = require("../../assets/headshots/" + imageFile[0]);
      return (
        <div className={classes.player} key={player.last_name}>
          <img
            className={classes.player_image}
            src={playerImage}
            alt={player.last_name}
          ></img>
          <p className={classes.name}>{player.last_name.toUpperCase()}</p>
          <div className={classes.points}>{player.points}</div>
          <p className={classes.name}>PTS</p>
        </div>
      );
    });
    setStats(stats);
  }, [playersData]);

  return <div className={classes.playerStats}>{stats}</div>;
};

export default Player;
