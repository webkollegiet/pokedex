import { Link } from "react-router-dom";
import getPokeId from "../../lib/get-poke-id";
import getPokeImage from "../../lib/get-poke-image";
import leadingZeros from "../../lib/leading-zeros";
import "./pokecard.css";

export default function PokeCard({ pokemon }) {
	const id = getPokeId(pokemon.url);
	const number = leadingZeros(id);
	const imgSrc = getPokeImage(id);

	return (
		<Link to={"/pokemon/" + id} className="pokeLink">
			<article className="pokeCard">
				<span className="pokeCard__number">#{number}</span>
				<img src={imgSrc} alt="" className="pokeCard__image" />
				<h2 className="pokeCard__title">{pokemon.name}</h2>
			</article>
		</Link>
	);
}