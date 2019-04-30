import uuid from "uuid";

class Detail {
	constructor(data, id = uuid.v4()) {
		this.id = id;
		this.movieId = data.id;
		this.title = data.title;
		this.poster = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
	}
}

export default Detail;
