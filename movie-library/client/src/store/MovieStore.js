import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";
import Detail from "../models/Detail";

import Api from "../api";

configure({ enforceActions: `observed` });

class MovieStore {
	movies = [];
	upcoming = [];
	topRated = [];
	movieDetail = [];

	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api();

		this.api
			.getAllMovies()
			.then(d => d.results.forEach(data => this._addMovie(data)));

		this.api
			.getAllMoviesUpcoming()
			.then(d => d.results.forEach(data => this._addMovieUpcoming(data)));

		this.api
			.getAllMoviesTopRating()
			.then(d => d.results.forEach(data => this._addMovieTopRating(data)));
	}

	_addMovie = data => {
		const movie = new Movie(data);
		runInAction(() => this.movies.push(movie));
	};

	_addMovieUpcoming = data => {
		const movie = new Movie(data);
		runInAction(() => this.upcoming.push(movie));
	};
	_addMovieTopRating = data => {
		const movie = new Movie(data);
		runInAction(() => this.topRated.push(movie));
	};

	LoadData = movieId => {
		// this.movieDetail = {};
		this.api.getDetailMovie(movieId).then(data => this._addMovieDetails(data));
		// this.api.getDetailMovie(movieId).then(data => {
		// 	this.movieDetail = data;
		// });
		// console.log(this.movieDetail);
		// console.log(movieId);
	};

	_addMovieDetails = data => {
		// console.log(data);
		this.movieDetail = [];
		const movie = new Detail(data);
		runInAction(() => this.movieDetail.push(movie));
		this.movieDetail = movie;
		console.log("new movie");
		console.log(this.movieDetail.title);
	};
}

decorate(MovieStore, {
	movies: observable,
	movieDetail: observable,
	_addMovie: action,
	_addMovieDetails: action,
	_addMovieTopRating: action,
	_addMovieUpcoming: action
});

export default MovieStore;
