import { CiLocation, CiCompany, CiWebsite, CiTwitter } from '../components/icons'
import SearchBox from '../components/SearchBox.jsx'
import MoonIcon from '/src/assets/icon-moon.svg'
import SunIcon from '/src/assets/icon-sun.svg'
import userImage from '/src/assets/profile-img.png'




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

          {/* SEARCH IMG  */}
          <div className="search-result__img">
            <img src={userImage} alt=""/>
          </div>

          {/* SEARCH INFO  */}

          <div className="search-result__info">
            <h3>The Octocat</h3>
            <h4>@octocat</h4>
            <p>Joined 25 Jan 2011</p>
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
            <div className="search-result__links-group">
              <div className="search-result__links-item">
                <CiLocation/>
                <a href="">San Francisco</a>
              </div>
              <div className="search-result__links-item">
                <CiCompany/>
                <a href="">https://github.blog</a>
              </div>
            </div>

            <div className="search-result__links-group">
              <div className="search-result__links-item">
                <CiTwitter/>
                <a href="">Not Available</a>
              </div>
              <div className="search-result__links-item">
                <CiWebsite/>
                <a href="">@github</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search
