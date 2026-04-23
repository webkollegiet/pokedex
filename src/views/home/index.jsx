import { useRef, useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import PokeCard from "../../components/pokecard";
import useFetch from "../../hooks/use-fetch";
import MainHeader from "../../components/main-header";
import { searchContext } from "../../contexts/searchContext";
import "./home.css";

export default function Home() {
	const { keyword } = useContext(searchContext);
	const [limit, setLimit] = useState(30);
	const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=1400`);
	const pokeRef = useRef(null);
	const [pokemonList, setPokemonList] = useState([]);
	const [searchParams] = useSearchParams();

	useEffect(function () {
		data && setPokemonList(() => data.results.slice(0, limit));
	}, [data]);

	useEffect(function () {
		if (!data) return;
		if (!pokeRef.current) return;
		if (keyword.length) return;

		let observer = new IntersectionObserver(
			function (entries) {
				if (entries[0].isIntersecting) {
					console.log("is intersecting", pokeRef.current);
					observer.unobserve(pokeRef.current);
					setPokemonList(() => data.results.slice(0, limit + 30));
					setLimit(prevLimit => prevLimit + limit);
				}
			}
		);

		observer.observe(pokeRef.current);
	}, [pokemonList]);

	useEffect(function () {
		if (!data) return;
		if (!keyword.length) {
			setLimit(() => 30);
			data && setPokemonList(prevState => [...data.results.slice(0, limit)]);
			return;
		}
		if (keyword.length < 2) return;

		const filteredList = data && data.results
			.filter(element => (
				element.name.toLowerCase()
					.includes(searchParams.get("search").toLowerCase())
			));

		setLimit(() => 30);
		setPokemonList(() => filteredList);
	}, [data, keyword, searchParams]);

	return (
		<div className="homeWrapper" style={{ backgroundColor: "var(--primaryColor-brand)" }}>
			<MainHeader />
			<main className="pokedexMain">
				<ul className="pokeList">
					{pokemonList && pokemonList.map((pokemon, index) => <li key={pokemon.url} ref={index === pokemonList.length - 4 ? pokeRef : null}><PokeCard pokemon={pokemon} /></li>)}
				</ul>
			</main>
		</div>
	);
}