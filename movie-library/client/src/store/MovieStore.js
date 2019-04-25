import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";
// import MovieWatchList from "../models/MovieWatchList";
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
	}

	_addMovie = data => {
		const movie = new Movie(data);
		runInAction(() => this.movies.push(movie));
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
