import { FaSearch } from "react-icons/fa";
import "./main-header.css";
import { useContext } from "react";
import { searchContext } from "../../contexts/searchContext";

export default function MainHeader() {
  const { setKeyword } = useContext(searchContext);

  function inputHandler(event) {
    setKeyword(event.target.value);
  }

  return (
    <header className="mainHeader">
      <h1 className="mainHeader__title"><img src="/pokeball.svg" /> Pokédex</h1>
      <form>
        <label className="mainHeader__searchLabel">
          <FaSearch className="mainHeader__searchLabelText" />
          <input type="search" onChange={inputHandler} name="keyword" className="mainHeader__searchField" />
        </label>
      </form>
    </header>
  );
}