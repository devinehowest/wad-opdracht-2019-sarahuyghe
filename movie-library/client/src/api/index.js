class Api {
	apiKey = "62b6ebfe3d6498b7c85dfc5764245b5d";
	constructor(entity) {
		this.entity = entity;
	}

	getAllMovies = async () => {
		const r = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`
		);
		return await r.json();
	};

	getAllMoviesOnWatchList = async () => {
		const r = await fetch(`/${this.entity}`);
		return await r.json();
	};

	create = async movie => {
		const r = await fetch(
			`http://localhost:4000/${this.entity}`,
			this.getOptions("post", movie.values)
		);

		return await r.json();
	};

	delete = async movie => {
		const r = await fetch(
			`http://localhost:4000/${this.entity}/${movie.id}`,
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
