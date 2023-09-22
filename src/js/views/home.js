import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [color, setColor] = useState("");
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
                      <Link to={`/single/` + people.uid}>
                        <p type="button" className="btn btn-outline-primary">
                          Learn more!
                        </p>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-warning float-end"
                        onClick={(event) => {
                          actions.favorite(people.properties.name);
                        }}
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
                      <Link to={`/planet/` + planet.uid}>
                        <p type="button" className="btn btn-outline-primary">
                          Learn more!
                        </p>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-warning float-end"
                        onClick={(event) => {
                          actions.favorite(planet.properties.name);
                        }}
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
        {/* VEHICLE */}
        <div className="row mt-5">
          <div className="col">
            <h4>Vehiculos</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col planets">
            {store.vehicles.map((vehicles, index) => {
              return (
                <div
                  className="card mx-2"
                  style={{ minWidth: "18rem" }}
                  key={index}
                >
                  <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{vehicles.properties.name}</h5>
                    <p className="card-text d-flex align-items-start flex-column">
                      <span className="text-black">
                        Fabricante: {vehicles.properties.manufacturer}
                      </span>
                      <span className="text-black">
                        Modelo: {vehicles.properties.model}
                      </span>
                      <span className="text-black">
                        Capacidad de carga: {vehicles.properties.cargo_capacity}
                      </span>
                    </p>
                    <div>
                      <Link to={`/vehicle/` + vehicles.uid}>
                        <p type="button" className="btn btn-outline-primary">
                          Learn more!
                        </p>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-warning float-end"
                        onClick={(event) => {
                          actions.favorite(vehicles.properties.name);
                        }}
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
