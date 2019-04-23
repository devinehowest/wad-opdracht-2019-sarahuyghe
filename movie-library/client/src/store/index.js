import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";
import MovieWatchList from "../models/MovieWatchList";
import Api from "../api";

configure({ enforceActions: `observed` });

class Store {
	movies = [];
	watchlist = [];

	constructor() {
		this.api = new Api(`watchlist`);

		this.api
			.getAllMovies()
			.then(d => d.results.forEach(data => this._addMovie(data)));

		this.api
			.getAllMoviesOnWatchList()
			.then(d => d.forEach(data => this._addMovieWatchList(data)));
		// .then(d => d.forEach(data => console.log(data)));
	}

	_addMovie = data => {
		const movie = new Movie(data);
		// console.log(data);
		runInAction(() => this.movies.push(movie));
		// console.log(this.watchlist);
	};

	addMovieWatchList = data => {
		const newMovie = new MovieWatchList(data);
		this.watchlist.push(newMovie);
		this.api
			.create(newMovie)
			.then(movieValues => newMovie.updateFromServer(movieValues));
	};

	_addMovieWatchList = ({ title, movieId, poster, _id }) => {
		const newItem = new MovieWatchList(title, movieId, poster, _id);
		runInAction(() => this.watchlist.push(newItem));
	};

	deleteMovieWatchList = movie => {
		this.watchlist.remove(movie);
		this.api.delete(movie);
	};
}

decorate(Store, {
	movies: observable,
	watchlist: observable,
	addMovieWatchList: action,
	_addMovie: action,
	_addMovieWatchList: action,
	deleteMovieWatchList: action
});

export default new Store();
