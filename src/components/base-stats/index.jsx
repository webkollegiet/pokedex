import Stat from "../stat";
import "./base-stats.css";

export default function BaseStats({stats, type}) {
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