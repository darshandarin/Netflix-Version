/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { loadBySearch, saveQuery } from '../../redux/actions/latestMovieAction';
import './header.scss';

function Header({ dispatch }) {
  const history = useHistory();

  const [query, setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const handleOnChange = (event) => {
    setQuery(event.target.value);
    if (query.length > 0) {
      dispatch(loadBySearch(query));
    }
  };

  useEffect(() => {
    if (query?.length > 0) {
      return history.push(`/search?q=${query}`);
    }
    return history.push(history.push('/'));
  }, [query]);

  useEffect(() => {
    dispatch(saveQuery(query));
  }, [query]);

  return (

    <header>
      <nav className="top-nav">
        <div className="nav-items">
          <div className="nav-items-menu">
            <div className="nav-logo nav-hover">
              <Link to="/">
                <img src="https://appstv-static-content-prod.wuaki.tv/images/720p/UI30_about_us-logo.70c3538baaaa2c6937b498be48c7e456.png" alt="logo" />
              </Link>

            </div>

            <div className="nav-option nav-hover">
              <div>CINEMA</div>
              <div>
                {' '}
                <div><i className="fa fa-caret-down" /></div>

                {' '}
              </div>
            </div>
            <div className="nav-option nav-hover">FREE</div>
            <div className="nav-option nav-hover">SUBSCRIPTION</div>
            <div className="nav-search search-hover">
              <div>
                {' '}
                <SearchIcon />
                {' '}
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                  className="search-hover"
                  value={query}
                  onChange={handleOnChange}
                />

              </div>
            </div>

          </div>

          <div className="nav-items-user">
            <div className="nav-help nav-hover">HELP & DEVICES</div>
            <div className="nav-signin nav-hover">SIGN IN</div>
            <div className="nav-register nav-hover">REGISTER</div>
            <div className="mobile nav-hover"><span className="material-icons">search</span></div>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default connect()(Header);

/*   <div>
      <span>search</span>
      {' '}
      <form action="">
    <input
    type="text"
    name=""
    id=""
    value={query}
    onChange={handleOnChange}
  />;

      </form>

    </div> */
