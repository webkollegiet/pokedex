import "./details-header.css";
import DetailsName from "../details-name";
import BackButton from "../back-button";
import PokeId from "../poke-id";

export default function DetailsHeader({ data }) {
  return (
    <header className="detailsHeader">
      <BackButton />
      <DetailsName name={data.name} />
      <PokeId id={data.id} />
    </header>
  );
}