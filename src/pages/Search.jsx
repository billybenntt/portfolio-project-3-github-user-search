import SearchBox from '../components/SearchBox.jsx'
import MoonIcon from '/src/assets/icon-moon.svg'
import SunIcon from '/src/assets/icon-sun.svg'
import userImage from '/src/assets/profile-img.png'
import userLocation from '/src/assets/icon-location.svg'
import userLink from '/src/assets/icon-website.svg'
import userTwitter from '/src/assets/icon-twitter.svg'
import userCompany from '/src/assets/icon-company.svg'

function Search () {
  return (
    <div className="search">
      <div className="search-header">
        <h3 className="header-title">devFinder</h3>
        <div className="header-toggle">
          <h3>Dark</h3>
          <img src={MoonIcon} alt="" className="toggle-icon"/>
        </div>
      </div>

      <SearchBox/>

      <div className="search-result">
        <div className="search-result-center">
          <div className="user-profile-header">
            <div className="">
              <img src={userImage} alt="" className="user-profile-img"/>
            </div>
            <div>
              <p>The Octocat</p>
              <p>@octocat</p>
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>

          <p className="user-profile-bio">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
            eros.
          </p>

          <div className="user-profile-stats">
            <div className="user-stat">
              <p>Repos</p>
              <p>8</p>
            </div>
            <div className="user-stat">
              <p>Followers</p>
              <p>3938</p>
            </div>
            <div className="user-stat">
              <p>Following</p>
              <p>9</p>
            </div>
          </div>
          <div className="user-profile-links">
            <div>
              <span>
                <img src={userLocation} alt="" className=""/>
              </span>
              <a href="">San Francisco</a>
            </div>

            <div>
              <span>
                <img src={userLink} alt="" className=""/>
              </span>
              <a href="">https://github.blog</a>
            </div>

            <div>
              <span>
                <img src={userTwitter} alt="" className=""/>
              </span>
              <a href="">Not available</a>
            </div>
            <div>
              <span>
                <img src={userCompany} alt="" className=""/>
              </span>
              <a href="">@github</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search
