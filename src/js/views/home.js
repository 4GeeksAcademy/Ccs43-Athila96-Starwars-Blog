import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { getSwapi } from "../apiConnect";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <React.Fragment>
      <div className="container-fluid">
        {/* // PEOPLE */}
        <div className="row mt-5">
          <div className="col">
            <h4>Personajes</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col planets">
            {store.people.map((people, index) => {
              return (
                <div
                  className="card mx-2"
                  style={{ minWidth: "18rem" }}
                  key={index}
                >
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{people.properties.name}</h5>
                    <p className="card-text d-flex align-items-start flex-column">
                      <span className="text-black">
                        Genero: {people.properties.gender}
                      </span>
                      <span className="text-black">
                        Color de cabello: {people.properties.hair_color}
                      </span>
                      <span className="text-black">
                        Color de ojos: {people.properties.eye_color}
                      </span>
                    </p>
                    <div>
                      <button type="button" className="btn btn-outline-primary">
                        Learn more!
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning float-end"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* // PLANETS */}
        <div className="row mt-5">
          <div className="col">
            <h4>Planetas</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col planets">
            {store.planets.map((planet, index) => {
              return (
                <div
                  className="card mx-2"
                  style={{ minWidth: "18rem" }}
                  key={index}
                >
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{planet.properties.name}</h5>
                    <p className="card-text d-flex align-items-start flex-column">
                      <span className="text-black">
                        Poblacion: {planet.properties.population}
                      </span>
                      <span className="text-black">
                        Terreno: {planet.properties.terrain}
                      </span>
                    </p>
                    <div>
                      <button type="button" className="btn btn-outline-primary">
                        Learn more!
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning float-end"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
