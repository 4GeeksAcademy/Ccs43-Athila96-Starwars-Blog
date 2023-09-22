import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetDetails = ({ idElement }) => {
  const { store, actions } = useContext(Context);

  const planetbyId = store.planets.find((planet) => {
    return planet.uid == idElement;
  });

  console.log(planetbyId.properties);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-3 " style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${idElement}.jpg`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{planetbyId.properties.name}</h5>
                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat rem nostrum voluptas consequatur eligendi a,
                      quisquam quasi odio velit alias ipsa animi nesciunt est,
                      temporibus placeat. Officiis placeat quod quasi!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-5 border-end">
            <h5>Climate</h5>
            <p>{planetbyId.properties.climate}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Diameter</h5>
            <p>{planetbyId.properties.diameter}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Gravity</h5>
            <p>{planetbyId.properties.gravity}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Orbital period</h5>
            <p>{planetbyId.properties.orbital_period}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Population</h5>
            <p>{planetbyId.properties.population}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Rotation period</h5>
            <p>{planetbyId.properties.rotation_period}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Surface water</h5>
            <p>{planetbyId.properties.surface_water}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Terrain</h5>
            <p>{planetbyId.properties.terrain}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
