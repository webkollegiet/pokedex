import { RiWeightLine } from "react-icons/ri";
import "./weight.css";

export default function Weight({weight}) {
  return (
    <div className="weightWrapper">
      <RiWeightLine />
      <span>{weight / 10} kg</span>
      <h3>Weight</h3>
    </div>
  );
}