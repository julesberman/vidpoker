import "./card.css";

function Card(props) {
    console.log(props)
    const { rank, suit } = props;
    return (
        <div className="card">
            <div className="rank">{rank}</div>
            <div className="suit">{suit}</div>
        </div>
    );
}

export default Card;
