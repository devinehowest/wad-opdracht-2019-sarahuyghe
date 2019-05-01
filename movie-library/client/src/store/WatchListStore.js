import {
	configure,
	decorate,
	observable,
	runInAction,
	action,
	observe
} from "mobx";
import MovieWatchList from "../models/MovieWatchList";
import Api from "../api";

configure({ enforceActions: `observed` });

class WatchListStore {
	watchlist = [];
	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api(`watchlist`);
		console.log(this.rootStore.uiStore);
		if (this.rootStore.uiStore.authUser) {
			this.getAllMoviesOnWatchList();
		}
		observe(this.rootStore.uiStore, "authUser", change => {
			if (change.newValue) {
				this.getAllMoviesOnWatchList();
			} else {
				runInAction(() => (this.watchlist = []));
			}
		});
	}

	getAllMoviesOnWatchList = () => {
		this.api
			.getAllMoviesOnWatchList()
			.then(d => d.forEach(this._addMovieWatchList));
	};

	addMovieWatchList = ({ title, movieId, poster, watched, _id }) => {
		// console.log(poster);
		const newMovie = new MovieWatchList(title, movieId, poster, watched, _id);
		console.log(newMovie);
		this.watchlist.push(newMovie);
		console.log(this.watchlist);
		this.api
			.create(newMovie)
			.then(movieValues => newMovie.updateFromServer(movieValues));
	};

	_addMovieWatchList = ({ title, movieId, poster, watched, _id }) => {
		console.log(title);
		const newItem = new MovieWatchList(title, movieId, poster, watched, _id);
		runInAction(() => this.watchlist.push(newItem));
	};

	updateWatchlist = movie => {
		console.log(movie);
		this.api
			.update(movie)
			.then(movieValues => movie.updateFromServer(movieValues));
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
