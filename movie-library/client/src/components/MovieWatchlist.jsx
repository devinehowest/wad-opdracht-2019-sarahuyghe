import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Movie.module.css";

import store from "../store";

class MovieWatchlist extends Component {
	constructor(props) {
		super(props);
		this.state = { watched: false };
		this.title = React.createRef();
	}

	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.props.movie.poster);
		store.watchlistStore.addMovieWatchList({
			title: this.title.current.textContent,
			movieId: this.props.movie.movieId,
			poster: this.props.movie.poster
		});
	};
	setWatchedMode = value => this.setState({ watched: value });

	render() {
		// const title = React.createRef();
		// console.log(this.props.movie.movieId);
		// const { watched } = this.state;
		const { movie, onDelete, onUpdate } = this.props;
		// console.log(movie.title);
		// console.log(watched);
		return (
			<>
				<div>
					<img src={movie.poster} alt="test" width="320" height="474" />
					<p className={styles.title} ref={this.title}>
						{movie.title}
					</p>

					<button
						onClick={() => {
							onUpdate(movie);
							this.setWatchedMode(true);
							// console.log(watched);
						}}
					>
						watched
					</button>
					{/* <Link to="/MovieDetail/${}">Detail</Link> */}
					{/* <a
						href={`https://api.themoviedb.org/3/movie/${
							movie.movieId
						}?api_key=${apiKey}`}
					>
						detail
					</a> */}
					<button onClick={() => onDelete(movie)}>Delete</button>
				</div>
			</>
		);
	}
}

MovieWatchlist.propTypes = {
	movie: PropTypes.object.isRequired
};

export default MovieWatchlist;
