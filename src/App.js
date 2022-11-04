import "./App.css";
import Player from "./Player";
import React, { useState } from "react";
import io from "socket.io-client";

function App() {
  const [data, setData] = useState({});

  let socket = io("http://localhost:8888", { transports: ["websocket"] });

  socket.on("serialdata", (data) => {
    setData(data);
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
