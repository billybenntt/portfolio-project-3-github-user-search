import { useState, useEffect } from 'react'
import { CiLocation, CiCompany, CiWebsite, CiTwitter, CiSearch, CiMoon, CiSun } from '../components/icons'
import userImage from '/src/assets/profile-img.png'

const getLocalStorage = () => {
  return localStorage.getItem('theme') || 'light'
}

function Search () {
  const [theme, setTheme] = useState(() => getLocalStorage())

  console.log(theme)

  // EFFECT - SET THEME
  useEffect(() => {
    /*Get HTML Element and assign Default class */
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  // EVENT HANDLER TOGGLE THEME
  function toggleTheme () {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="search">

      {/*SEARCH HEADER TOGGLE */}
      <div className="search-header">
        <h3 className="search-header__title">devFinder</h3>
        <div className="search-header__toggle" onClick={toggleTheme}>
          <h3> {theme === 'dark' ? "light" : "dark"}</h3>
          <div className="search-header__toggle-icon">
            {theme === 'dark' ? <CiSun/> : <CiMoon/>}
          </div>
        </div>
      </div>

      {/*SEARCH BOX */}
      <form className="search-box">
        <div className="search-box__center">
          <div className="search-box__icon">
            <CiSearch/>
          </div>
          <input type="text"
            placeholder="Search GitHub username…"
            className="search-box__input"/>
          <button className="search-box__btn" type="button">
            Search
          </button>
        </div>
      </form>

      {/*SEARCH RESULTS */}
      <div className="search-result">
        <div className="search-result__center">
          {/* SEARCH IMG  */}
          <div className="search-result__img">
            <img src={userImage} alt=""/>
          </div>
          {/* SEARCH INFO  */}

          <div className="search-result__info">
            <div>
              <h3>The Octocat</h3>
              <h4>@octocat</h4>
            </div>
            <div>
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
