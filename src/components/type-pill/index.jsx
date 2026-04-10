import "./type-pill.css";

export default function TypePill({name}) {
  return <span className={`pill --${name}`}>{name}</span>
}