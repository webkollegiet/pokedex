import Stat from "../stat";
import "./base-stats.css";
import useType from "../../hooks/use-type";

export default function BaseStats({stats}) {
  const { type } = useType()
  return (
    <section className="statsWrapper">
      <h2 className={"textColor--" + type}>Base Stats</h2>
      <table className="statTable">
        <tbody>
          {stats.map(e => <Stat key={e.stat.name} stat={e} type={type} />)}
        </tbody>
      </table>
    </section>
  )
}