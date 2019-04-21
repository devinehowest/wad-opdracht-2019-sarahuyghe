import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";
import MovieWatchList from "../models/MovieWatchList";
import Api from "../api";

configure({ enforceActions: `observed` });

class Store {
	movies = [];
	watchlist = [];

	constructor() {
		this.api = new Api();

		this.api
			.getAllMovies()
			// .then(d => d.results.forEach(data => console.log(data.title)));
			.then(d => d.results.forEach(data => this._addMovie(data)));

		this.api
			.getAllMoviesOnWatchList()
			.then(d => d.forEach(data => this._addMovieWatchList(data)));
	}

	_addMovie = data => {
		const movie = new Movie(data);
		runInAction(() => this.movies.push(movie));
	};

	addMovieWatchlist = movie => {
		// console.log(movie);
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				title: movie.title,
				movieId: movie.movieId,
				poster: movie.poster
			})
		};
		fetch("http://localhost:4000/watchlist", options)
			.then(r => r.json())
			.then(book => this._addMovieWatchList(book));
	};

	_addMovieWatchList = (movie, id) => {
		const newItem = new MovieWatchList(movie, id);
		runInAction(() => this.watchlist.push(newItem));
	};
}

decorate(Store, {
	movies: observable,
	watchlist: observable,
	_addMovie: action,
	_addMovieWatchList: action
});

export default new Store();
