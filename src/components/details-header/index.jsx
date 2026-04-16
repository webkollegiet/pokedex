import "./details-header.css";
import DetailsName from "../details-name";
import BackButton from "../back-button";
import PokeId from "../poke-id";
import useType from "../../hooks/use-type";

export default function DetailsHeader({ data }) {

  const { type } = useType()
  console.log(type)
  return (
    <header className="detailsHeader">
      <BackButton />
      <DetailsName name={data.name} />
      <PokeId id={data.id} />
    </header>
  );
}