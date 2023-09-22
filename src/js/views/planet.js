import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlanetDetails } from "../component/planetsDetails.jsx";

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const idElement = params.theid;
  return <PlanetDetails idElement={idElement} />;
};

Planet.propTypes = {
  match: PropTypes.object,
};
