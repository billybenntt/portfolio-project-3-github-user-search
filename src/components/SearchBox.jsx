import SearchIcon from '../assets/icon-search.svg'

function SearchBox (props) {


  return (
    <form className="search-box">
      <div className="search-box-center">
        <img src={SearchIcon} alt="search-icon"
          className="search-icon"/>
        <input type="text"
          placeholder="Search GitHub username…"
          className="search-input"/>
        <div className="search-error active">
          <p>No results</p>
        </div>
        <button className="search-btn" type="button">Search</button>
      </div>
    </form>
  )
}

export default SearchBox
