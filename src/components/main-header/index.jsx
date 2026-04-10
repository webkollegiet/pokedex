import { FaSearch } from "react-icons/fa";
import "./main-header.css";

export default function MainHeader() {
  return (
    <header className="mainHeader">
      <h1 className="mainHeader__title"><img src="/pokeball.svg" /> Pokédex</h1>
      <form>
        <label className="mainHeader__searchLabel">
          <FaSearch className="mainHeader__searchLabelText" />
          <input type="search" name="keyword" className="mainHeader__searchField" />
        </label>
      </form>
    </header>
  );
}