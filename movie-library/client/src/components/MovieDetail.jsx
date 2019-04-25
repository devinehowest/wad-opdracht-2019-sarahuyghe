import React from "react";
import PropTypes from "prop-types";

import styles from "./Movie.module.css";

import store from "../store";

const Movie = ({ movie }) => {
	console.log(movie);
	return <></>;
};

Movie.propTypes = {
	movie: PropTypes.object.isRequired
};

export default Movie;
