import { FaSearch } from "react-icons/fa";
import "./main-header.css";
import { useContext } from "react";
import { searchContext } from "../../contexts/searchContext";
import { useSearchParams } from "react-router-dom";

export default function MainHeader() {
  const { keyword, setKeyword } = useContext(searchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  function inputHandler(event) {
    setKeyword(event.target.value);
    setSearchParams(`?search=${event.target.value}`);
  }

  return (
    <header className="mainHeader">
      <h1 className="mainHeader__title"><img src="/pokeball.svg" /> Pokédex</h1>
      <form onSubmit={e => e.preventDefault()}>
        <label className="mainHeader__searchLabel">
          <FaSearch className="mainHeader__searchLabelText" />
          <input type="search" value={keyword} onChange={inputHandler} name="keyword" className="mainHeader__searchField" />
        </label>
      </form>
    </header>
  );
}