import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";
import Api from "../api";

configure({ enforceActions: `observed` });

class MovieStore {
	movies = [];

	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api();

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
	_addMovie: action
});

export default MovieStore;
