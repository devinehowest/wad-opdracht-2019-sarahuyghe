import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import { ROUTES } from "../constants";

import store from "../store";

const WatchListItem = ({ movie, onDelete }) => {
	const title = React.createRef();

	const apiKey = process.env.REACT_APP_MovieDB_API;
	// const testing = store.movieStore.findMovie(movie.movieId);

	return (
		<>
			<div>
				<Link to={`detail/${movie.movieId}`}>
					{/* href=
					{`https://api.themoviedb.org/3/movie/${
						movie.movieId
					}?api_key=${apiKey}`}
					> */}
					<img src={movie.poster} alt="test" width="320" height="474" />
				</Link>
				<p className={styles.title} ref={title}>
					{movie.title}
				</p>
				{/* <Link to="/MovieDetail/${}">Detail</Link> */}
				detail
				<button onClick={() => onDelete(movie)}>Delete</button>
			</div>
		</>
	);
};

WatchListItem.propTypes = {
	movie: PropTypes.object.isRequired
};

export default WatchListItem;
