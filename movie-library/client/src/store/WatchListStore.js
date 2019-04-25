import { configure, decorate, observable, runInAction, action } from "mobx";
import MovieWatchList from "../models/MovieWatchList";
import Api from "../api";

configure({ enforceActions: `observed` });

class WatchListStore {
	watchlist = [];
	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api(`watchlist`);

		this.api
			.getAllMoviesOnWatchList()
			.then(d => d.forEach(data => this._addMovieWatchList(data)));
	}

	addMovieWatchList = ({ title, movieId, poster, _id }) => {
		const newMovie = new MovieWatchList(title, movieId, poster, _id);
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

decorate(WatchListStore, {
	watchlist: observable,
	addMovieWatchList: action,
	_addMovieWatchList: action,
	deleteMovieWatchList: action
});

export default WatchListStore;
