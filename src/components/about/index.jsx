import Height from "../height";
import Moves from "../moves";
import Weight from "../weight";
import "./about.css";
import { useContext } from "react";
import { typeContext } from "../../contexts/typeContext";

export default function About({data}) {
  const { type } = useContext(typeContext)
  return (
    <section className="aboutSection">
      <h2 className={"textColor--" + type}>About</h2>
      <div className="aboutWrapper">
        <Weight weight={data.weight} />
        <Height height={data.height} />
        <Moves moves={data.abilities} />
      </div>
    </section>
  );
}