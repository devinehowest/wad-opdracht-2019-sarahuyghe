import React from "react";
import PropTypes from "prop-types";

import styles from "./Movie.module.css";

import store from "./../store";

const Movie = ({ movie }) => {
	const titleInput = React.createRef();
	const idMovie = React.createRef();
	const movieImage = React.createRef();

	const apiKey = process.env.REACT_APP_MovieDB_API;

	const handleSubmit = e => {
		e.preventDefault();
		store.addMovieWatchlist({
			title: titleInput.current.textContent,
			id: idMovie.current.id,
			poster: movieImage.current.src
		});
	};

	return (
		<>
			<div id={movie.id} ref={idMovie}>
				<img
					src={movie.poster}
					alt="test"
					width="320"
					height="474"
					ref={movieImage}
				/>
				<form onSubmit={handleSubmit}>
					<p className={styles.title} ref={titleInput}>
						{movie.title}
					</p>
					<input type="submit" value="+ Add" />
				</form>
				<a
					href={`https://api.themoviedb.org/3/movie/${
						movie.id
					}?api_key=${apiKey}`}
				>
					detail
				</a>
			</div>
		</>
	);
};

Movie.propTypes = {
	movie: PropTypes.object.isRequired
};

export default Movie;
