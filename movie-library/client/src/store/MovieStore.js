import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";
import MovieWatchList from "../models/MovieWatchList";
import Api from "../api";

configure({ enforceActions: `observed` });

class MovieStore {
	movies = [];
	watchlist = [];
	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api(`watchlist`);

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

	addMovieWatchList = ({ title, movieId, poster, _id }) => {
		const newMovie = new MovieWatchList(title, movieId, poster, _id);
		this.watchlist.push(newMovie);
		console.log(this.watchlist);
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

decorate(MovieStore, {
	movies: observable,
	watchlist: observable,
	addMovieWatchList: action,
	_addMovie: action,
	_addMovieWatchList: action,
	deleteMovieWatchList: action
});

export default MovieStore;
