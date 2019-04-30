import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Movie.module.css";

import store from "../store";

class MovieDetail extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentWillMount() {
		store.movieStore.LoadData(this.props.movieId);
		// const movieDetail = store.movieStore.movieDetail;
		// console.log(movieDetail);
	}
	getData = () => {
		const { movieDetail } = store.movieStore;
		console.log(movieDetail);
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		const { movieId } = this.props;
		// const { movieDetail } = store.movieStore;
		// console.log(movieDetail);
		// const { details } = this.action;
		// console.log(movieDetail.title);
		console.log(this.movieDetail);
		return (
			<>
				<p>test</p>
				<p>{movieId}</p>
				{/* <p>{this.movieDetail.title}</p> */}
				<p>testing</p>
			</>
		);
	}
}

MovieDetail.propTypes = {
	movie: PropTypes.object.isRequired
};

export default MovieDetail;
