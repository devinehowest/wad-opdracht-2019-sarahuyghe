import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { inject, observer } from "mobx-react";

const Movies = ({ store }) => {
	const { movies } = store;
	// console.log(movies);
	return <></>;
	// movies.map((movie, i) => {
	// 	return <Movie key={i} movie={movie} />;
	// });

	// Object.keys(movies).map(key => <Movie movie={movies[key]} key={key} />);
};

// Movies.propTypes = {
// 	movies: PropTypes.object.isRequired
// };

export default inject("store")(observer(Movies));
