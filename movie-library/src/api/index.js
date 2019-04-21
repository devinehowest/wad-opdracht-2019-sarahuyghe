class Api {
	apiKey = process.env.REACT_APP_MovieDB_API;

	getAllMovies = async () => {
		const r = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`
		);
		return await r.json();
	};

	getAllMoviesOnWatchList = async () => {
		const r = await fetch(`http://localhost:4000/watchlist`);
		return await r.json();
	};
}

export default Api;
