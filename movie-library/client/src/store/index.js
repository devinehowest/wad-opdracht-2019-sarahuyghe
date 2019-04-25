import MovieStore from "./MovieStore";
import WatchListStore from "./WatchListStore";

class RootStore {
	constructor() {
		this.movieStore = new MovieStore(this);
		this.watchlistStore = new WatchListStore(this);
	}
}

export default new RootStore();
