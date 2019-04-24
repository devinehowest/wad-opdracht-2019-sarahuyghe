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
		// .then(d => d.forEach(data => console.log(data)));
	}

	_addMovie = data => {
		const movie = new Movie(data);
		runInAction(() => this.movies.push(movie));
	};

	addMovieWatchList = data => {
		const newMovie = new MovieWatchList(data);
		// console.log(newMovie);
		this.watchlist.push(newMovie);
		console.log(this.watchlist);
		this.api
			.create(newMovie)
			.then(movieValues => newMovie.updateFromServer(movieValues));
	};

	_addMovieWatchList = ({ title, movieId, poster, _id }) => {
		// console.log(title);
		const newItem = new MovieWatchList(title, movieId, poster, _id);
		// console.log(newItem);
		runInAction(() => this.watchlist.push(newItem));
		// console.log(this.watchlist);
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
