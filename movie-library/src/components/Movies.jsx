import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { inject, observer } from "mobx-react";

import styles from "../Typo.module.css";

const Movies = ({ store }) => {
	const { movies } = store;
	const { watchlist } = store;
	// console.log(watchlist);
	return (
		<>
			<h1 className={styles.mainTitle}>Discover</h1>
			<section>
				{movies.map((movie, index) => (
					<Movie key={index} movie={movie} />
				))}
			</section>
			<section>
				{watchlist.map((watchlist, index) => (
					<Movie key={index} movie={watchlist} />
				))}
			</section>
		</>
	);
};

// Movies.propTypes = {
// 	store: PropTypes.object.isRequired
// };

export default inject("store")(observer(Movies));
