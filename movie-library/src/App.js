import React, { Component } from "react";
import "./App.css";

import Movies from "./components/Movies";
import Movie from "./components/Movie";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
		this.apiKey = process.env.REACT_APP_MovieDB_API;
	}

	handleClick = () => {
		fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`)
			.then(r => r.json())
			.then(movies => this.setState({ movies: [...movies.results] }));
	};

	render() {
		const { movies } = this.state;
		console.log(movies);
		return (
			<>
				<button onClick={this.handleClick} />
				{/* <Movies movies={this.state.movies} />; */}
			</>
		);
	}
}

export default App;
