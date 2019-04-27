import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { inject } from "mobx-react";

import Movies from "./components/Movies";
import Watchlists from "./components/Watchlist";
import Navigation from "./components/navigation";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

import { ROUTES } from "./constants/";

import "./styles.css";
const App = ({ uiStore }) => {
	return (
		<div className="App">
			<Navigation />
			<Switch>
				<Route path={ROUTES.home} exact strict component={Movies} />
				<Route path={ROUTES.watchlist} component={Watchlists} />
				<Route path={ROUTES.login} component={Login} />
				<Route path={ROUTES.register} component={Register} />
				<Route
					path={ROUTES.landing}
					exact
					strict
					render={() => (
						<>
							<p>Welcome to the bookstore</p>
							{/* {uiStore.authUser ? (
                <Link to={ROUTES.books}>Books</Link>
              ) : (
                <ul>
                  <li>
                    <Link to={ROUTES.login}>Sign in</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.register}>Register</Link>
                  </li>
                </ul>
              )} */}
						</>
					)}
				/>
			</Switch>
		</div>
	);
};

export default inject("uiStore")(App);
