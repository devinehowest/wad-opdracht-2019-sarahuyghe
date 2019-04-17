import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { inject, observer } from "mobx-react";

import styles from "../Typo.module.css";

const Movies = ({ store }) => {
	const { movies } = store;
	console.log(movies);
	return (
		<>
			<h1 className={styles.mainTitle}>Discover</h1>
			{movies.map((movie, index) => (
				<Movie key={index} movie={movie} />
			))}
		</>
	);
};

// Movies.propTypes = {
// 	store: PropTypes.object.isRequired
// };

export default inject("store")(observer(Movies));
