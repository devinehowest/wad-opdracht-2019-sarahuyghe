import React from "react";
import PropTypes from "prop-types";

const Movie = ({ movie }) => {
	console.log(movie);
	return (
		<>
			<img src={movie.poster} alt="test" />
			<p>{movie.title}</p>
		</>
	);
};

Movie.propTypes = {
	movie: PropTypes.object.isRequired
};

export default Movie;
