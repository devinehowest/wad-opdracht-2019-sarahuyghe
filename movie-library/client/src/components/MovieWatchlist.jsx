import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./MovieWatchList.module.css";

import store from "./../store";

class MovieWatchlist extends Component {
	constructor(props) {
		super(props);
		this.state = { watched: this.props.movie.watched };
		this.title = React.createRef();
	}

	setWatchedMode = value => this.setState({ watched: true });

	render() {
		// const title = React.createRef();
		const { watched } = this.state;
		const { movie, onDelete, onUpdate } = this.props;

		return (
			<>
				<div className={styles.movie}>
					<img src={movie.poster} alt="test" width="320" height="474" />
					<p className={styles.title} ref={this.title}>
						{movie.title}
					</p>

					<button
						// className={styles.buttonAdd}
						onClick={() => {
							this.setWatchedMode(true);
							// console.log(this.props.movie.movieId);
							// console.log(watched);
							onUpdate(movie);
							console.log(movie.watched);
							// this.setWatchedMode(true);
							// console.log(watched);
						}}
						className={styles.buttonWatched}
					>
						watched
					</button>

					<button
						onClick={() => onDelete(movie)}
						className={styles.buttonDelete}
					>
						Delete
					</button>
				</div>
			</>
		);
	}
}

MovieWatchlist.propTypes = {
	movie: PropTypes.object.isRequired
};

export default MovieWatchlist;
