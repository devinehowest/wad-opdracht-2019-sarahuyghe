import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";
import MovieWatchList from "../models/MovieWatchList";

configure({ enforceActions: `observed` });

class Store {
	movies = [];
	apiKey = process.env.REACT_APP_MovieDB_API;
	watchlist = [];

	constructor() {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
			.then(r => r.json())
			.then(d => d.results.forEach(data => this._addMovie(data)));
		fetch("http://localhost:4000/watchlist")
			.then(r => r.json())
			.then(data => data.forEach(data => this._addMovieWatchList(data)));
	}

	_addMovie = data => {
		const movie = new Movie(data);
		runInAction(() => this.movies.push(movie));
	};

	addMovieWatchlist = movie => {
		console.log(movie);
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ title: movie.title, id: movie.id })
		};
		fetch("http://localhost:4000/watchlist", options)
			.then(r => r.json())
			.then(book => this._addMovieWatchList(book));
	};

	_addMovieWatchList = movie => {
		console.log(movie);
		const newItem = new MovieWatchList(movie);
		// console.log(newItem);
		runInAction(() => this.watchlist.push(newItem));
		// console.log(this.watchlist);
	};
}

decorate(Store, {
	movies: observable,
	watchlist: observable,
	_addMovie: action,
	_addMovieWatchList: action
});

export default new Store();
