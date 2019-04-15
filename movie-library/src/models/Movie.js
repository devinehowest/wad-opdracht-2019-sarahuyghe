import uuid from "uuid";
class Movie {
	constructor(title, id = uuid.v4()) {
		this.id = id;
		this.title = title;
	}
}

export default Movie;
