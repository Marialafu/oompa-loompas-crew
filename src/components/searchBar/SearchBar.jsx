import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-content">
        <input type="text" placeholder="Search" />
        <div className="divider" />
        <img src="/images/ic_search.webp" alt="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
