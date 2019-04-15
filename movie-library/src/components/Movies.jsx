import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

const Movies = ({ movies }) => {
	// console.log(movies);
	movies.map((movie, i) => {
		return <Movie key={i} movie={movie} />;
		// console.log(movie);
	});

	// Object.keys(movies).map(key => <Movie movie={movies[key]} key={key} />);
};

Movies.propTypes = {
	movies: PropTypes.object.isRequired
};

export default Movies;
