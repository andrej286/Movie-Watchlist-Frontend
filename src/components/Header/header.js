import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/MW-main.png'

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className={"container"}>
                    <img src={logo} alt="Logo" style={{width: "100px", height: "70px"}}/>
                <a className="navbar-brand" href="/movies"><i>Movie Watchlist</i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ps-3" >
                            <Link className="nav-link" to={"/movies"}>
                                <i className={"bi bi-film me-2"} style={{color: "rgb(223,185,93)"}}/>
                                Movies</Link>
                        </li>
                        <li className="nav-item active ps-3">
                            <Link className="nav-link" to={"/watchlist"}>
                                <i className={"bi-bookmark-star me-1"} style={{color: "rgb(223,185,93)"}}/>
                                Watchlist
                            </Link>
                        </li>

                    </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default header;