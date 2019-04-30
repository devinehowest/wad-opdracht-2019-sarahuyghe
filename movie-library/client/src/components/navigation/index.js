import React from "react";
import { Link } from "react-router-dom";
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
						<Link to={ROUTES.home} className={styles.links}>
							Home
						</Link>
					</li>
					<li>
						<Link to={ROUTES.watchlist} className={styles.links}>
							Watchlist
						</Link>
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
						<Link to={ROUTES.login} className={styles.links}>
							Sign in
						</Link>
					</li>
					<li>
						<Link to={ROUTES.register} className={styles.links}>
							Register
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default inject("uiStore")(observer(Navigation));
