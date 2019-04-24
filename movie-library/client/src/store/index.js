import MovieStore from "./MovieStore";

class RootStore {
	constructor() {
		this.movieStore = new MovieStore(this);
	}
}

export default new RootStore();
