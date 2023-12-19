import CoordinatorContext from "./CoordinatorContext";

const CoordinatorState = (props) => {
	const host = "http://localhost:5000";
	const createUser = async (details) => {
		console.log(details);
		const response = await fetch(`${host}/api/coordinator/auth/createuser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(details),
		});
		const json = await response.json();
		return json;
	};
	const login = async (email, password) => {
		const response = await fetch(`${host}/api/coordinator/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		const json = await response.json();
		return json;
	};

	return <CoordinatorContext.Provider value={{ createUser, login }}>{props.children}</CoordinatorContext.Provider>;
};

export default CoordinatorState;
