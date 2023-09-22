import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoStart from "../../img/Star-Wars-Logo.webp";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const fav = store.favorites.length;

  const handleDelete = (event, favorite) => {
    event.stopPropagation(); // evita que se cierre el menu de favoritos al darle clic a eliminar
    actions.DeleteFavorite(favorite);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand" to={"/"}>
          <img src={logoStart} alt="StarWars" className="logo" />
        </Link>
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
              {fav}
            </span>
          </button>
          <ul className="dropdown-menu">
            {fav === 0 ? (
              <p className="m-2">
                <strong>(empty)</strong>
              </p>
            ) : (
              store.favorites.map((favorite, index) => {
                return (
                  <li key={index} className="d-flex justify-content-between">
                    <span className="m-1">{favorite}</span>
                    <button
                      className="btn btn-primary m-1"
                      onClick={(event) => {
                        handleDelete(event, favorite);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
