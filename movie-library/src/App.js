import React, { Component } from "react";
import "./App.css";

import Movies from "./components/Movies";
// import Movie from "./components/Movie";

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		movies: []
	// 	};
	// 	// this.apiKey = process.env.REACT_APP_MovieDB_API;
	// }

	render() {
		return <Movies />;
	}
}

export default App;
