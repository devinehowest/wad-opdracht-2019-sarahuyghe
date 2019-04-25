import MovieStore from "./MovieStore";
import WatchListStore from "./WatchListStore";
import UiStore from "./UiStore";

class RootStore {
	constructor() {
		this.movieStore = new MovieStore(this);
		this.watchlistStore = new WatchListStore(this);
		this.uiStore = new UiStore(this);
	}
}

export default new RootStore();
