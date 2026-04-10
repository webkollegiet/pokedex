import TypePill from "../type-pill";
import "./type-list.css";

export default function TypeList({types}) {
  return (
    <div className="typeList">
      {types.map(e => <TypePill key={e.type.name} name={e.type.name} />)}
    </div>
  );
}