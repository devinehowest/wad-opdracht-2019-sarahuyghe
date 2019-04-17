import React from "react";
import PropTypes from "prop-types";

import styles from "./Movie.module.css";

const Movie = ({ movie }) => {
	console.log(movie);
	return (
		<>
			<div>
				<img src={movie.poster} alt="test" width="320" height="474" />
				<p className={styles.title}>{movie.title}</p>
				<input type="submit" value="+ Add" />
			</div>
		</>
	);
};

Movie.propTypes = {
	movie: PropTypes.object.isRequired
};

export default Movie;
