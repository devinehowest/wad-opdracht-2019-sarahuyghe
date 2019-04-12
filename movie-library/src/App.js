import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Captain marvel",
			overview:
				"The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe."
		};
	}
	render() {
		const { title } = this.state;
		const { overview } = this.state;
		return <Movie title={title} overview={overview} />;
	}
}

export default App;
