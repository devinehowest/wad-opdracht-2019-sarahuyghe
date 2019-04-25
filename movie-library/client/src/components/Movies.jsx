import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { inject, observer } from "mobx-react";

import styles from "../Typo.module.css";

const Movies = ({ movieStore }) => {
	const { movies } = movieStore;

	return (
		<>
			<section>
				<h1 className={styles.mainTitle}>Discover</h1>

				{movies.map((movie, index) => (
					<Movie key={index} movie={movie} />
				))}
			</section>
		</>
	);
};

Movies.propTypes = {
	movieStore: PropTypes.object.isRequired
};

export default inject("movieStore")(observer(Movies));
