import PokeCard from "../../components/pokecard";
import useFetch from "../../hooks/use-fetch";
import MainHeader from "../../components/main-header";
import "./home.css";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const limit = 30;
	const [offset, setOffset] = useState(0);
	const [pokemonList, setPokemonList] = useState([]);
	const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
	const pokeRef = useRef();

	useEffect(function() {
		data && setPokemonList(prevState => [...prevState, ...data.results]);
	}, [data]);

	useEffect(function() {
		if (!pokeRef.current) return;
		let observer = new IntersectionObserver(function (entries) {
			if (entries[0].isIntersecting) {
				setOffset(prevState => prevState + limit);
				observer.unobserve(pokeRef.current);
			}
		}, { root: null, rootMargin: "200px", threshold: 0 });
		observer.observe(pokeRef.current);
	}, [pokeRef, pokemonList]);

	return (
		<div className="homeWrapper" style={{backgroundColor: "var(--primaryColor-brand)"}}>
			<MainHeader />
			<main className="pokedexMain">
				<ul className="pokeList">
					{pokemonList && pokemonList.map((pokemon, index) => (
						<li key={pokemon.url} ref={index === pokemonList.length - 4 ? pokeRef : null}><PokeCard pokemon={pokemon} /></li>
					))}
				</ul>
			</main>
		</div>
	);
}