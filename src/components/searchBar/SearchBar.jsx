import "./SearchBar.css";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-bar">
      <div className="search-bar-content">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="divider" />
        <img src="/images/ic_search.webp" alt="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
