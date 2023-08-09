import SearchBox from '../components/SearchBox.jsx'
import MoonIcon from '/src/assets/icon-moon.svg'
import SunIcon from '/src/assets/icon-sun.svg'
import userImage from '/src/assets/profile-img.png'
import CiLocation from '../components/icons/CiLocation.jsx'
import CiCompany from '../components/icons/CiCompany.jsx'
import CiTwitter from '../components/icons/CiTwitter.jsx'
import CiWebsite from '../components/icons/CiWebsite.jsx'

function Search () {
  return (
    <div className="search">

      {/*SEARCH HEADER TOGGLE */}

      <div className="search-header">
        <h3 className="search-header__title">devFinder</h3>
        <div className="search-header__toggle">
          <h3>Dark</h3>
          <img src={MoonIcon} alt="" className="search-header__toggle-icon"/>
        </div>
      </div>


      {/*SEARCH BOX */}

      <SearchBox/>

      {/*SEARCH RESULTS */}
      <div className="search-result">
        <div className="search-result__center">

          {/* SEARCH HEADER  */}
          <div className="search-result__header">
            <div className="">
              <img src={userImage} alt="" className="user-profile-img"/>
            </div>
            <div className="search-result__header-info">
              <h3>The Octocat</h3>
              <h4>@octocat</h4>
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>

          {/* SEARCH BIO */}
          <div className="search-result__bio">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
              eros.
            </p>
          </div>

          {/* STATS */}
          <div className="search-result__stats">
            <div className="search-result__stats-item">
              <h4>Repos</h4>
              <p>8</p>
            </div>
            <div className="search-result__stats-item">
              <h4>Followers</h4>
              <p>3938</p>
            </div>
            <div className="search-result__stats-item">
              <h4>Following</h4>
              <p>9</p>
            </div>
          </div>

          {/*LINKS */}
          <div className="search-result__links">
            <div className="search-result__links-item">
              <CiLocation/>
            </div>
            <div className="search-result__links-item">
              <CiCompany/>
            </div>
            <div className="search-result__links-item">
              <CiTwitter/>
            </div>
            <div className="search-result__links-item">
              <CiWebsite/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search
