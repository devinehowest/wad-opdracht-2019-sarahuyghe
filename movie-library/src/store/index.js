import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";

configure({ enforceActions: `observed` });

class Store {
	movies = [];
	apiKey = process.env.REACT_APP_MovieDB_API;

	constructor() {
		fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`)
			.then(r => r.json())
			.then(d => d.results.forEach(data => this._addMovie(data)));
	}

	_addMovie = data => {
		const movie = new Movie(data.title, data.id);
		runInAction(() => this.movies.push(movie));
		// console.log(this.movies);
	};
}

decorate(Store, {
	movies: observable,
	_addMovie: action
});

export default new Store();
