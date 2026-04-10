import Height from "../height";
import Moves from "../moves";
import Weight from "../weight";
import "./about.css";

export default function About({data, type}) {
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