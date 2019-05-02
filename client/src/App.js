import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { inject } from "mobx-react";

import Movies from "./components/Movies";
import Upcoming from "./components/Upcoming";
import TopRated from "./components/TopRated";
import Watchlists from "./components/Watchlist";
import Navigation from "./components/navigation";
import Login from "./components/auth/LoginForm";
import Register from "./components/auth/RegisterForm";
import MovieDetail from "./components/MovieDetail";

import { ROUTES } from "./constants/";

import "./styles.css";
const App = ({ uiStore }) => {
	return (
		<div className="App">
			<Navigation />
			<Switch>
				<Route path={ROUTES.home} exact strict component={Movies} />
				<Route path={ROUTES.upcoming} component={Upcoming} />
				<Route path={ROUTES.toprated} component={TopRated} />
				<Route path={ROUTES.watchlist} exact component={Watchlists} />
				<Route path={ROUTES.login} component={Login} />
				<Route path={ROUTES.register} component={Register} />
				<Route
					path="/MovieDetail/:id"
					render={({ match }) => (
						<MovieDetail movieId={match.params.id} loadData={match.params.id} />
					)}
					// 	<>
					// 		<p>Welcome to the bookstore</p>
					// 		{/* {uiStore.authUser ? (
					//       <Link to={ROUTES.books}>Books</Link>
					//     ) : (
					//       <ul>
					//         <li>
					//           <Link to={ROUTES.login}>Sign in</Link>
					//         </li>
					//         <li>
					//           <Link to={ROUTES.register}>Register</Link>
					//         </li>
					//       </ul>
					//     )} */}
					// 	</>
					// )}
				/>
			</Switch>
		</div>
	);
};

export default inject("uiStore")(App);
