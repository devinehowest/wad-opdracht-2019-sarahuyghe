class Auth {
	login = (email, password) => {
		return fetch("/user/login", {
			method: "POST",
			headers: {
				"content-type": `application/json`
			},
			body: JSON.stringify({
				email,
				password
			})
		}).then(res => {
			if (res.status === 200) {
				Promise.resolve();
			} else {
				Promise.reject();
			}
		});
	};

	logout = () => {
		return fetch("/user/logout", {
			method: "POST",
			headers: {
				"content-type": `application/json`
			}
		});
	};

	register = (name, email, password) => {
		return fetch("/user/register", {
			method: "POST",
			headers: {
				"content-type": `application/json`
			},
			body: JSON.stringify({
				name,
				email,
				password
			})
		}).then(res => {
			if (res.status === 200) {
				Promise.resolve();
			} else {
				Promise.reject();
			}
		});
	};
}

export default Auth;
