import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { inject, observer } from "mobx-react";

import styles from "../Typo.module.css";

const Movies = ({ watchlistStore }) => {
	const { watchlist } = watchlistStore;

	return (
		<>
			<section>
				<h1 className={styles.mainTitle}>Watchlist</h1>

				{watchlist.length > 0 ? (
					<section>
						{watchlist.map((watchlist, index) => (
							<Movie
								key={index}
								movie={watchlist}
								onDelete={watchlistStore.deleteMovieWatchList}
							/>
						))}
					</section>
				) : (
					<p>No movies yet, why don't you add one?</p>
				)}
			</section>
		</>
	);
};

Movies.propTypes = {
	watchlistStore: PropTypes.object.isRequired
};

export default inject("watchlistStore")(observer(Movies));
