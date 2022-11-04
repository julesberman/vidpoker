import React, { useState } from "react";
import io from "socket.io-client";
import "./App.css";
import Player from "./Player";

// function processData(data) {

//   player = getPlayer(data)
//   cards = getCard(data)

//   return player, cards

// }


function App(props) {
  const [serialdata, setSerialData] = useState({});


  let socket = io("http://localhost:8888", { transports: ["websocket"] });

  socket.on("serialdata", (serialdata) => {
    setSerialData(serialdata);
  });


  return (
    <div className="App">
      <div className="player-cont">
        <Player name={"Tom"} />
        <Player name={"Aaron"} />
        <Player name={"Bingo"} />
        <Player name={"Rick Dolo"} />
      </div>
    </div>
  );
}

export default App;
