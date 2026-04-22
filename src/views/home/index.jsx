import PokeCard from "../../components/pokecard";
import useFetch from "../../hooks/use-fetch";
import MainHeader from "../../components/main-header";
import "./home.css";
import { useRef, useEffect, useState, useContext } from "react";
import { searchContext } from "../../contexts/searchContext";

export default function Home() {
	const { keyword } = useContext(searchContext);
	const limit = 30;
	const [offset, setOffset] = useState(0);
	const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
	const { data: shadowList } = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=1400`);
	const pokeRef = useRef(null);
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(function () {
		data && setPokemonList((prevList) => {

			const seen = new Set(prevList.map((p) => p.url));

			const uniqueIncoming = data.results.filter((p) => {
				if (seen.has(p.url)) return false;
				seen.add(p.url);
				return true;
			});

			return [...prevList, ...uniqueIncoming]
		});
	}, [data]);

	useEffect(function () {
		if (!pokeRef.current) return
		if (keyword.length) return
		let observer = new IntersectionObserver(
			function (entries) {
				if (entries[0].isIntersecting) {
					observer.unobserve(pokeRef.current);
					setOffset(prevOffset => prevOffset + limit);
				}
			}
		);

		const timeout = setTimeout(function () {
			observer.observe(pokeRef.current);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [pokemonList]);

	useEffect(function () {
		if (!keyword.length) {
			setOffset(() => 0);
			data && setPokemonList(prevState => [...data.results]);
			return;
		}
		if (keyword.length < 2) return;

		const filteredList = shadowList.results.filter(element => element.name.toLowerCase().includes(keyword.toLowerCase()));
		setOffset(() => 0);
		setPokemonList(filteredList);
	}, [keyword]);

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