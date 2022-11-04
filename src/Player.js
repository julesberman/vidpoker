import Card from "./Card";
import "./player.css";
import { genRandomCard } from "./utils";

function Player(props) {
  let { rank, suit } = genRandomCard();
  // let { rank2, suit2 } = genRandomCard();
  const { name, folded } = props;


  return (
    <div className="player">
      <div className="name">{name}</div>
      <Card className="card" rank={rank} suit={suit} />
      <Card className="card" rank={rank} suit={suit} />
    </div>
  );
}

export default Player;
