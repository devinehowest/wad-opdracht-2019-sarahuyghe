import React, { Component } from "react";
import "./App.css";

import Movies from "./components/Movies";
// import Movie from "./components/Movie";
import "./styles.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Movies />
			</div>
		);
	}
}

export default App;
