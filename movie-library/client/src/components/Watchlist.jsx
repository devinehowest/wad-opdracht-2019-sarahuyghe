import React from "react";
import PropTypes from "prop-types";
import MovieWatchlist from "./MovieWatchlist";
import { inject, observer } from "mobx-react";
import withAuthentication from "./auth/WithAuthentication";

import styles from "../Typo.module.css";

const Watchlist = ({ watchlistStore }) => {
	const { watchlist } = watchlistStore;

	return (
		<>
			<section>
				<h1 className={styles.mainTitle}>Watchlist</h1>

				{watchlist.length > 0 ? (
					<section>
						{watchlist.map((watchlist, index) => (
							<MovieWatchlist
								key={index}
								movie={watchlist}
								onDelete={watchlistStore.deleteMovieWatchList}
								onUpdate={watchlistStore.updateWatchlist}
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

Watchlist.propTypes = {
	watchlistStore: PropTypes.object.isRequired
};

export default inject("watchlistStore")(
	withAuthentication(observer(Watchlist))
);
