import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

import styles from "./MovieWatchList.module.css";

import store from "./../store";

class MovieWatchlist extends Component {
	constructor(props) {
		super(props);
		this.state = { edit: false };
		this.title = React.createRef();
	}

	setWatchedMode = value => this.setState({ watched: value });

	handleUpdate = () => {
		this.props.movie.setWatched(!this.props.movie.watched);
		this.props.onUpdate(this.props.movie);
	};

	render() {
		const { edit } = this.state;
		const { movie, onDelete, onUpdate } = this.props;

		return (
			<>
				<div className={styles.movie}>
					<img src={movie.poster} alt="test" width="320" height="474" />
					<p className={styles.title} ref={this.title}>
						{movie.title}
					</p>

					<button
						className={movie.watched ? styles.buttonWatched : styles.buttonHelp}
						onClick={() => {
							this.handleUpdate();
							this.setState({ edit: true });
						}}
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

export default observer(MovieWatchlist);
