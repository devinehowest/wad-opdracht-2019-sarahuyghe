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
			.then(d => d.results.forEach(data => this._addMovie(data)));

		this.api
			.getAllMoviesOnWatchList()
			.then(d => d.forEach(data => this._addMovieWatchList(data)));
	}

	_addMovie = data => {
		const movie = new Movie(data);
		runInAction(() => this.movies.push(movie));
	};

	addMovieWatchList = data => {
		const newMovie = new MovieWatchList(data);
		this.watchlist.push(newMovie);
		this.api
			.create(newMovie)
			.then(movieValues => newMovie.updateFromServer(movieValues));
	};

	_addMovieWatchList = ({ movie, _id }) => {
		const newItem = new MovieWatchList(movie, _id);
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
