import "./stat.css";

export default function Stat({stat, type}) {
	const statName = {
		"hp": "HP",
		"attack": "ATK",
		"special-attack": "SATK",
		"defense": "DEF",
		"special-defense": "SDEF",
		"speed": "SPD"
	};
	
	return (
		<tr>
			<th className={"statTable__title textColor--" + type}>{statName[stat.stat.name]}</th>
			<td className="statTable__statCell">{stat.base_stat.toString().padStart(3, "0")}</td>
			<td className="statTable__meterCell">
				<meter max="230" value={stat.base_stat} /* className={"--" + type} */ />
			</td>
		</tr>
	);
}