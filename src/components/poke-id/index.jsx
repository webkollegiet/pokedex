import leadingZeros from "../../lib/leading-zeros";
import "./poke-id.css";

export default function PokeId({id}) {
    const number = leadingZeros(id.toString());

    return (
        <span className="pokeId">#{number}</span>
    );
}