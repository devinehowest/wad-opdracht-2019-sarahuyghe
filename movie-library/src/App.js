import React, { Component } from "react";
// import logo from "./logo.svg";
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
		// console.log(this.apiKey);

		// fetch(
		// 	`https://api.themoviedb.org/3/movie/top_rated?api_key=62b6ebfe3d6498b7c85dfc5764245b5d`
		// )
		// 	.then(r => r.json())
		// 	// .then(moviesdb => Object.keys(moviesdb).forEach(this.addDB));
		// 	// .then(db => )
		// 	// .then(movies => console.log(movies.results));
		// 	.then(movies => this.setState({ movies: [...movies.results] }));
		// Object.keys(movies).forEach(this.addMovie));
	}

	// addDB = db => {
	// 	console.log(db);
	// 	Object.keys(db).forEach(results => console.log(results));
	// };

	// addMovie = movies => {
	// 	// console.log(movie.title);
	// 	// movies.map((movie, i) => console.log(movie.title));
	// 	movies.map((movie, i) => <Movie movie={movie} key={i} />);
	// 	// Object.keys(movie).forEach(this.addNewMovie);
	// };

	addNewMovie = movie => {
		console.log(movie);
	};

	componentWillMount;

	handleClick = () => {
		// const { apiKey } = this.string;
		fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`)
			.then(r => r.json())
			// .then(moviesdb => Object.keys(moviesdb).forEach(this.addDB));
			// .then(db => )
			// .then(movies => console.log(movies.results));
			.then(movies => this.setState({ movies: [...movies.results] }));
	};

	render() {
		const { movies } = this.state;
		console.log(movies);
		// console.log(this.apiKey);
		// const { title } = this.state;
		// const { overview } = this.state;
		return (
			<>
				<button onClick={this.handleClick} />
				{/* <Movies movies={this.state.movies} />; */}
			</>
		);
		// <Movies movies={this.state.movies} />;
		// <></>;
	}
}

export default App;
