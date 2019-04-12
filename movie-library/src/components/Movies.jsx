import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

const Movies = ({ movies }) => {
	// console.log(movies);
	return Object.keys(movies).map(key => (
		<Movie movie={movies[key]} key={key} />
	));
};

Movies.propTypes = {
	movies: PropTypes.object.isRequired
};

export default Movies;
