import React from "react";
import { Link, NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../../constants";

import styles from "./Navigation.module.css";

const Navigation = ({ uiStore }) => {
	console.log(uiStore.authUser);
	return (
		<nav className={styles.navSection}>
			{uiStore.authUser ? (
				<ul>
					<li>
						<NavLink to={ROUTES.home} className={styles.links}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to={ROUTES.watchlist} className={styles.links}>
							Watchlist
						</NavLink>
					</li>
					{/* <li>
						<Link to={ROUTES.login}>Login</Link>
					</li> */}
					<li>{uiStore.authUser.name}</li>
					<button onClick={uiStore.logout} className={styles.links}>
						logout
					</button>
				</ul>
			) : (
				<ul>
					<li>
						<NavLink to={ROUTES.login} className={styles.links}>
							Sign in
						</NavLink>
					</li>
					<li>
						<NavLink to={ROUTES.register} className={styles.links}>
							Register
						</NavLink>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default inject("uiStore")(observer(Navigation));
