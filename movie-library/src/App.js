import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Movies from "./components/Movies";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: {
				1: {
					title: "Captain marvel",
					overview:
						"The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe."
				},
				2: {
					title: "Bumblebee",
					overview:
						"On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken. When Charlie revives him, she quickly learns this is no ordinary yellow VW bug."
				}
			}
		};
	}
	render() {
		// const { title } = this.state;
		// const { overview } = this.state;
		return <Movies movies={this.state.movies} />;
	}
}

export default App;
