import { useParams } from "react-router-dom"
import useFetch from "../../hooks/use-fetch";
import ImageSlider from "../../components/image-slider";
import DetailsHeader from "../../components/details-header";
import TypeList from "../../components/type-list";
import "./pokemon.css";
import About from "../../components/about";
import FlavorText from "../../components/flavor-text";
import BaseStats from "../../components/base-stats";

export default function Pokemon() {
    const { id } = useParams();
    const { data, error, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { data: species } = useFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    
    const backgroundColor = data ? `--${data.types[0].type.name}` : "";

    return data && (
        <main className={"detailsWrapper " + backgroundColor}>
            <DetailsHeader data={data} />
            <ImageSlider sprites={data.sprites} />
            <section className="details">
                <TypeList types={data.types} />
                <About data={data} type={data.types[0].type.name} />
                {species && <FlavorText flavor_text_entries={species.flavor_text_entries} />}
                <BaseStats stats={data.stats} type={data.types[0].type.name} />
            </section>
        </main>
    );
}