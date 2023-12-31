import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PeopleDetails } from "../component/peopleDetails.jsx";
import { PlanetDetails } from "../component/planetsDetails.jsx";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const idElement = params.theid;
  return (
    <div>
      <PeopleDetails idElement={idElement} />;
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
