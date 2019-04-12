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

Movie.propTypes = {
	movie: PropTypes.object.isRequired
};

export default Movie;
