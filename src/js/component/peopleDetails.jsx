import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PeopleDetails = ({ idElement }) => {
  const { store, actions } = useContext(Context);

  const people_byId = store.people.find((people) => {
    return people.uid == idElement;
  });

  console.log(people_byId.properties);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-3 " style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${idElement}.jpg`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {people_byId.properties.name}
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
        <div className="row mb-5">
          <div className="col-5 border-end">
            <h5>Skin Color</h5>
            <p>{people_byId.properties.skin_color}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Height</h5>
            <p>{people_byId.properties.height}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Eye color</h5>
            <p>{people_byId.properties.eye_color}</p>
          </div>
          {/* <div className="col-1 border-end m-1">
            <h5>URL</h5>
            <p>{people_byId.properties.url}</p>
          </div> */}
          <div className="col-1 border-end m-1">
            <h5>Gender</h5>
            <p>{people_byId.properties.gender}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Mass</h5>
            <p>{people_byId.properties.mass}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Hair color</h5>
            <p>{people_byId.properties.hair_color}</p>
          </div>
          <div className="col-1 border-end m-1">
            <h5>Birth year</h5>
            <p>{people_byId.properties.birth_year}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
