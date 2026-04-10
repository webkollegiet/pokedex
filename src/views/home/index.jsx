import PokeCard from "../../components/pokecard";
import useFetch from "../../hooks/use-fetch";
import MainHeader from "../../components/main-header";
import "./home.css";

export default function Home() {
	const { data } = useFetch("https://pokeapi.co/api/v2/pokemon");

	return (
		<div className="homeWrapper" style={{backgroundColor: "var(--primaryColor-brand)"}}>
			<MainHeader />
			<main className="pokedexMain">
				<ul className="pokeList">
					{data && data.results.map(pokemon => <li key={pokemon.url}><PokeCard pokemon={pokemon} /></li>)}
				</ul>
			</main>
		</div>
	);
}