import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";

type SearchProps = {
  input: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ input, onChange }: SearchProps) => {
  return (
    <div className="search">
      <input
        type="text"
        className="searchInput"
        placeholder="Looking for teammates..."
        value={input}
        onChange={onChange}
      />
      <button type="submit" className="searchButton">
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
