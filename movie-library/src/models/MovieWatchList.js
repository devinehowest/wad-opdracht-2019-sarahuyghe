import uuid from "uuid";

class Movie {
	constructor(data, id = uuid.v4()) {
		this.id = id;
		this.movieId = data.movieId;
		this.title = data.title;
		this.poster = data.poster;
	}
}

export default Movie;
