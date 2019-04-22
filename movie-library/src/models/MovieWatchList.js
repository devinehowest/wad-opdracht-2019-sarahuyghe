import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Movie {
	constructor(data, id = uuid.v4()) {
		this.id = id;
		this.movieId = data.movieId;
		this.title = data.title;
		this.poster = data.poster;
	}

	setId = id => (this.id = id);
	setTitle = value => (this.title = value);
	setMovieId = value => (this.movieId = value);
	setPoster = value => (this.poster = value);

	get values() {
		return { title: this.title, movieId: this.movieId, poster: this.poster };
	}

	updateFromServer = values => {
		this.setId(values.id);
		this.setTitle(values.title);
		this.setMovieId(values.movieId);
		this.setPoster(values.poster);
	};
}

decorate(Movie, {
	id: observable,
	setId: action,
	values: computed,
	title: observable,
	movieId: observable,
	poster: observable,
	setTitle: action,
	setMovieId: action,
	setPoster: action
});

export default Movie;
