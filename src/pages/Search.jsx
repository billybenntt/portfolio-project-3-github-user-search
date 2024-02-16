import { CiLocation, CiCompany, CiWebsite, CiTwitter, CiSearch, CiMoon, CiSun } from '../components/icons'
import { useGlobalContext } from '../hooks/context.jsx'
import moment from 'moment'
import { toast } from 'react-toastify'

function Search () {

  console.log(import.meta.env.VITE_SOME_KEY)

  const { fetchUserData, user, toggleTheme, theme, resetUser, search, setSearch } = useGlobalContext()
  const {
    name, login, bio, blog, created_at, public_repos,
    company, followers, following, avatar_url, location,
    twitter_username
  } = user

  const formatDate = moment(created_at).format('MMM Do, YYYY')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search) {
      fetchUserData(search)
    } else {
      toast.info('Enter username')
    }
  }

  return (
    <div className="search">
      <div className="search-center">
        {/*SEARCH HEADER TOGGLE */}
        <div className="search-header">
          <h3 className="search-header__title" onClick={resetUser}>devFinder</h3>
          <div className="search-header__toggle" onClick={toggleTheme}>
            <h3> {theme === 'dark' ? 'light' : 'dark'}</h3>
            <div className="search-header__toggle-icon">
              {theme === 'dark' ? <CiSun/> : <CiMoon/>}
            </div>
          </div>
        </div>

        {/*SEARCH BOX */}
        <form className="search-box" onSubmit={handleSubmit}>
          <div className="search-box__center">
            <div className="search-box__icon">
              <CiSearch/>
            </div>
            <input type="text" onChange={(e) => setSearch(e.target.value)}
              placeholder="Search GitHub username…"
              value={search}
              className="search-box__input"/>
            <button className="search-box__btn" type="submit">
              Search
            </button>
          </div>
        </form>

        {/*SEARCH RESULTS */}
        <div className="search-result">
          <div className="search-result__center">
            {/* SEARCH IMG  */}
            <div className="search-result__img">
              <img src={avatar_url} alt=""/>
            </div>
            {/* SEARCH INFO  */}
            <div className="search-result__info">
              <div>
                <h3>{name}</h3>
                <h4>@{login}</h4>
              </div>
              <div>
                <p>Joined {formatDate}</p>
              </div>
            </div>
            {/* SEARCH BIO */}
            <div className="search-result__bio">
              <p>
                {bio ? bio : 'This profile has no bio'}
              </p>
            </div>
            {/* STATS */}
            <div className="search-result__stats">
              <div className="search-result__stats-item">
                <h4>Repos</h4>
                <p>{public_repos}</p>
              </div>
              <div className="search-result__stats-item">
                <h4>Followers</h4>
                <p>{followers}</p>
              </div>
              <div className="search-result__stats-item">
                <h4>Following</h4>
                <p>{following}</p>
              </div>
            </div>
            {/*LINKS */}
            <div className="search-result__links">
              <div className="search-result__links-group">
                <div className={location ? 'search-result__links-item' : 'search-result__links-item error'}>
                  <CiLocation/>
                  <a href="">
                    {location ? location : 'Not Available'}
                  </a>
                </div>
                <div className={company ? 'search-result__links-item' : 'search-result__links-item error'}>
                  <CiCompany/>
                  <a href="">
                    {company ? company : 'Not Available'}
                  </a>
                </div>
              </div>
              <div className="search-result__links-group">
                <div className={twitter_username ? 'search-result__links-item' : 'search-result__links-item error'}>
                  <CiTwitter/>
                  <a href="">
                    {twitter_username ? twitter_username : 'Not Available'}
                  </a>
                </div>
                <div className={blog ? 'search-result__links-item' : 'search-result__links-item error'}>
                  <CiWebsite/>
                  <a href="">
                    {blog ? blog : 'Not Available'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search
