import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Movie.module.css";

import store from "../store";

class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = { watched: false };
		this.title = React.createRef();
	}

	handleSubmit = e => {
		e.preventDefault();
		store.watchlistStore.addMovieWatchList({
			title: this.title.current.textContent,
			movieId: this.props.movie.movieId,
			poster: this.props.movie.poster
		});
	};
	setWatchedMode = value => this.setState({ watched: value });

	render() {
		const { movie } = this.props;

		return (
			<>
				<div>
					<Link to={`/MovieDetail/${movie.movieId}`}>
						<img src={movie.poster} alt="test" width="320" height="474" />
						<p className={styles.title} ref={this.title}>
							{movie.title}
						</p>
						<button value="+ Add" onClick={this.handleSubmit}>
							+ Add
						</button>

						{/* <a
						href={`https://api.themoviedb.org/3/movie/${
							movie.movieId
						}?api_key=${apiKey}`}
					>
						detail
          </a> */}
					</Link>
				</div>
			</>
		);
	}
}

// const Movie = ({ movie, onDelete }) => {
// 	const title = React.createRef();

// 	const apiKey = process.env.REACT_APP_MovieDB_API;

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		store.watchlistStore.addMovieWatchList({
// 			title: title.current.textContent,
// 			movieId: movie.movieId,
// 			poster: movie.poster
// 		});
// 	};
// 	return (
// 		<>
// 			<div>
// 				<img src={movie.poster} alt="test" width="320" height="474" />
// 				<p className={styles.title} ref={title}>
// 					{movie.title}
// 				</p>
// 				<button value="+ Add" onClick={handleSubmit}>
// 					+ Add
// 				</button>
// 				{/* <Link to="/MovieDetail/${}">Detail</Link> */}
// 				<a
// 					href={`https://api.themoviedb.org/3/movie/${
// 						movie.movieId
// 					}?api_key=${apiKey}`}
// 				>
// 					detail
// 				</a>
// 				<button onClick={() => onDelete(movie)}>Delete</button>
// 			</div>
// 		</>
// 	);
// };

Movie.propTypes = {
	movie: PropTypes.object.isRequired
};

export default Movie;
