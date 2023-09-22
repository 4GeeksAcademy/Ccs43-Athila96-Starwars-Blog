import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const VehicleDetails = ({ idElement }) => {
  const { store, actions } = useContext(Context);

  const vehiclebyId = store.vehicles.find((vehicle) => {
    return vehicle.uid == idElement;
  });

  console.log(vehiclebyId.properties);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-3 " style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${idElement}.jpg`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {vehiclebyId.properties.name}
                    </h5>
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
        <div className="row mb-2 d-flex justify-content-center">
          <div className="col- border-end">
            <h5 className="adentro fs-6">Cargo capacity</h5>
            <p className="adentro">{vehiclebyId.properties.cargo_capacity}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5 className="adentro fs-6">Consumables</h5>
            <p className="adentro">{vehiclebyId.properties.consumables}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5 className="adentro fs-6">Cost in credits</h5>
            <p className="adentro">{vehiclebyId.properties.cost_in_credits}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5 className="adentro fs-6">Crew</h5>
            <p className="adentro">{vehiclebyId.properties.crew}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5 className="adentro fs-6">Length</h5>
            <p className="adentro">{vehiclebyId.properties.length}</p>
          </div>
          <div className="col-1 border-end m-1 ">
            <h5 className="adentro fs-6">Manufacturer</h5>
            <p className="adentro">{vehiclebyId.properties.manufacturer}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5 className="adentro fs-6">Model</h5>
            <p className="adentro">{vehiclebyId.properties.model}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5 className="adentro fs-6">Max atmosphering speed</h5>
            <p className="adentro">
              {vehiclebyId.properties.max_atmosphering_speed}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
