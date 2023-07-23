import React from "react";
import { Link } from "react-router-dom";
import logoStart from "../../img/Star-Wars-Logo.webp";

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand" href="#">
          <img src={logoStart} alt="StarWars" width="200" height="100" />
        </Link>
        {/* // SEARCH */}
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        {/*  // FAVORITE BUTTON */}
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              10
            </span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link>Tu eleccion</Link>
              <i className="fa-solid fa-trash"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
