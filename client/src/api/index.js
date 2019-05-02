class Api {
	apiKey = process.env.REACT_APP_MovieDB_API;
	constructor(entity) {
		this.entity = entity;
	}

	getAllMovies = async () => {
		const r = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${
				this.apiKey
			}&language=en-US&page=1`
		);
		return await r.json();
	};

	getAllMoviesUpcoming = async () => {
		const r = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${
				this.apiKey
			}&language=en-US&page=1`
		);
		return await r.json();
	};

	getAllMoviesTopRating = async () => {
		const r = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${
				this.apiKey
			}&language=en-US&page=1`
		);
		return await r.json();
	};

	getDetailMovie = async movieId => {
		const r = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${
				this.apiKey
			}&language=en-US`
		);
		return await r.json();
	};

	getAllMoviesOnWatchList = async () => {
		const r = await fetch(`/${this.entity}`);
		return await r.json();
	};

	create = async movie => {
		const r = await fetch(
			`/${this.entity}`,
			this.getOptions("post", movie.values)
		);
		return await r.json();
	};

	update = async movie => {
		console.log(movie.id);
		const r = await fetch(
			`/${this.entity}/${movie.id}`,
			this.getOptions("put", movie.values)
		);
		return await r.json();
	};

	delete = async movie => {
		const r = await fetch(
			`/${this.entity}/${movie.id}`,
			this.getOptions("delete")
		);
		return r.json();
	};

	getOptions = (method, body = null) => {
		const options = {
			method: method.toUpperCase(),
			headers: {
				"content-type": `application/json`
			}
		};
		if (body) {
			options.body = JSON.stringify(body);
		}
		return options;
	};
}

export default Api;
