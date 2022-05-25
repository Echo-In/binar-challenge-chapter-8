import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const DUMMY_PLAYER = [
    {
      userid: 1,
      username: "Faker",
      email: "faker@skt.kr",
      experience: 9999,
      level: 98,
    },
    {
      userid: 2,
      username: "Showmaker",
      email: "showmaker@dwg.kr",
      experience: 99999,
      level: 99,
    },
  ];

  const [playerData, setPlayerData] = useState(DUMMY_PLAYER);
  const [formData, setFormData] = useState(null);
  // const [navbarData, setNavbarData] = useState("Search");

  const addPlayer = (data) => {
    const latestPlayer = playerData[playerData.length - 1];

    const newPlayer = {
      ...data,
      userid: latestPlayer.userid + 1,
    };

    setPlayerData((prevState) => {
      const newData = [...prevState, newPlayer];
      return newData.sort((a, b) => b.userid - a.userid);
    });
  };

  const getPlayerData = (data) => {
    data.action = "Edit";
    setFormData(data);
  };

  const searchPlayerData = (data) => {
    // data.action = "Search";
    setFormData(data);
  };

  const updatePlayer = (data) => {
    setPlayerData((prevState) => {
      const noneditedPlayerData = prevState.filter(
        (player) => player.userid !== formData.userid
      );

      const newData = [...noneditedPlayerData, data];

      return newData.sort((a, b) => b.userid - a.userid);
    });
  };

  const searchPlayer = (data) => {
    setPlayerData((prevState) => {
      const existingPlayerData = [...prevState];

      /** NOTE: Still not complete, only able to search if all parameter filled */
      const searchResult = existingPlayerData.filter((x) => {
        if (
          x.username &&
          x.username !== "" &&
          x.email &&
          x.email !== "" &&
          x.experience &&
          x.experience !== "" &&
          x.level &&
          x.level !== "" &&
          x.username === data.username &&
          x.email === data.email &&
          x.experience === Number(data.experience) &&
          x.level === Number(data.level)
        ) {
          return true;
        } else return false;
      });

      return searchResult;
    });
  };

  return (
    <div className="App">
      <Navbar onClickSearch={searchPlayerData} />

      <Form
        form={formData}
        onAddPlayer={addPlayer}
        onUpdatePlayer={updatePlayer}
        onSearchPlayer={searchPlayer}
      />

      <Table players={playerData} onEditPlayer={getPlayerData} />
    </div>
  );
}

export default App;
