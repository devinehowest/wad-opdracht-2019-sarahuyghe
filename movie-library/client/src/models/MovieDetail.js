import uuid from "uuid";

class MovieDetail {
	constructor(data, id = uuid.v4()) {
		this.id = id;
		// console.log(data);
		this.movieId = data.id;
		this.title = data.title;
		// this.poster = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
	}
}

export default MovieDetail;
