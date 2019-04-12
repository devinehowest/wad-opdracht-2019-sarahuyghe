import React from "react";
import PropTypes from "prop-types";

const Movie = ({ movie: { title, overview } }) => {
	// console.log(movie);
	return (
		<>
			<h1>{title}</h1>
			<p>{overview}</p>
		</>
	);
};

Movie.propTypes = {};

export default Movie;
