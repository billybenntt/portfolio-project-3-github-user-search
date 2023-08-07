import SearchBox from '../components/SearchBox.jsx'
import MoonIcon from '/src/assets/icon-moon.svg'
import SunIcon from '/src/assets/icon-sun.svg'

function Search () {
  return (
    <div className="search">
      <div className="search-header">
        <h3 className="header-title">devFinder</h3>
        <div className="search-toggle">
          <h3>Dark</h3>
          <img src={MoonIcon} alt=""/>
        </div>
      </div>

      <SearchBox/>

      <div className="search-result">
        <div className="search-result-center">

        </div>
      </div>

    </div>
  )
}

export default Search
