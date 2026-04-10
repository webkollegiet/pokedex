import { VscSymbolRuler } from "react-icons/vsc";
import "./height.css";

export default function Height({height}) {
  return (
    <div className="heightWrapper">
      <div>
        <VscSymbolRuler />
        <span>{height / 10} m</span>
      </div>
      <h3>Height</h3>
    </div>
  );
}