import PokeCard from "../../components/pokecard";
import useFetch from "../../hooks/use-fetch";
import MainHeader from "../../components/main-header";
import "./home.css";
import { useRef, useEffect, useState } from "react";

export default function Home() {
	const limit = 30
	const [offset, setOffset] = useState(0)
	const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
	const pokeRef = useRef(null)
	const [pokemonList, setPokemonList] = useState([])

	useEffect(function() {
		data && setPokemonList((prevList) => [...prevList, ...data.results])
	}, [data])
	
	// [ {bulbasaur} {bdkfaskf}, {sdjasædk}, {kdfjaks}, {sjkds}]
	// [ alle pokemon]

	useEffect(function() {
	console.log("useEffect runs")
    console.log(pokeRef.current)
    if(!pokeRef.current) return
    let observer = new IntersectionObserver(
      function(entries) {
        console.log(entries[0].isIntersecting)

        if(entries[0].isIntersecting) {
			console.log("nu er den der")
			setOffset(prevOffset => prevOffset + limit)
          observer.unobserve(pokeRef.current)
        }
      }
    )
    observer.observe(pokeRef.current)
  }, [pokemonList])

  

	return (
		<div className="homeWrapper" style={{backgroundColor: "var(--primaryColor-brand)"}}>
			<MainHeader />
			<main className="pokedexMain">
				<ul className="pokeList">
					{pokemonList && pokemonList.map((pokemon, index) => <li key={pokemon.url} ref={index === pokemonList.length - 4 ? pokeRef : null}><PokeCard pokemon={pokemon} /></li>)}
				</ul>
			</main>
		</div>
	);
}