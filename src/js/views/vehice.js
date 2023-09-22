import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { VehicleDetails } from "../component/vehicleDetails.jsx";

export const Vehicle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const idElement = params.theid;
  return <VehicleDetails idElement={idElement} />;
};

Vehicle.propTypes = {
  match: PropTypes.object,
};
