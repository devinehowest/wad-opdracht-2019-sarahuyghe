import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";

configure({ enforceActions: `observed` });

class Store {
	movies = [];
	apiKey = process.env.REACT_APP_MovieDB_API;

	constructor() {
		fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`)
			.then(r => r.json())
			// .then(data => console.log(data.results));
			.then(data => this.movies.push(data.results));
		console.log(this.movies);
	}

	_addMovie = ({ title, id }) => {
		const movie = new Movie(title, id);
		runInAction(() => this.movies.push(movie));
		// console.log(this.movies);
	};
}

decorate(Store, {
	movies: observable,
	alterArray: action
});

export default new Store();
