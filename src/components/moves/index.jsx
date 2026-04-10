import "./moves.css";

export default function Moves({moves}) {
  return (
    <div>
      <ul className="movesList">
        {moves.map(e => <li className="movesList__item" key={e.ability.name}>{e.ability.name}</li>)}
      </ul>
      <h3>Moves</h3>
    </div>
  );
}