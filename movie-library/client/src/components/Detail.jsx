import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import styles from "./Movie.module.css";
// import { ROUTES } from "../constants";

import store from "../store";

const WatchListItem = ({ id, movieDetail }) => {
	// console.log(id);
	// // const title = React.createRef();
	// const testing = store.movieStore.findMovie(id);
	// console.log(testing);
	// const { movie } = store.movieStore;
	// console.log(movie);
	// const apiKey = process.env.REACT_APP_MovieDB_API;
	// console.log(movieDetail);
	const { movie } = store.movieStore;
	console.log(movie.title);
	return (
		<>
			{/* <p>{movie.original_title}</p> */}
			<p>testing</p>
			{/* <p>{movieDetail}</p> */}
		</>
	);
};

WatchListItem.propTypes = {
	// movie: PropTypes.object.isRequired
};

export default WatchListItem;
