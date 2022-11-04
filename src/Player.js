import "./player.css";
import { genRandomCard } from "./utils";

function Player(props) {
  let card1 = genRandomCard();
  let card2 = genRandomCard();
  const { name, folded } = props;
  return (
    <div className="player">
      <div className="name">{name}</div>
      <div className="card">{card1}</div>
      <div className="card">{card2}</div>
    </div>
  );
}

export default Player;
