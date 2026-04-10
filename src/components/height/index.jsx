import { VscSymbolRuler } from "react-icons/vsc";
import "./height.css";

export default function Height({height}) {
  return (
    <div className="heightWrapper">
      <VscSymbolRuler />
      <span>{height / 10} m</span>
      <h3>Height</h3>
    </div>
  );
}