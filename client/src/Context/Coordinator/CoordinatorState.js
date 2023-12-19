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

	const addStudent = async (student) => {
		// console.log(students);
		if (localStorage.getItem("token") === null) return { status: 400, message: "Please login first" };
		const response = await fetch(`${host}/api/coordinator/auth/addstudent`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ student, token: localStorage.getItem("token").split(",")[0] }),
		});
		const json = await response.json();
		console.log(json);
	};
	const addGuide = async (guide) => {
		// console.log(students);
		if (localStorage.getItem("token") === null) return { status: 400, message: "Please login first" };
		const response = await fetch(`${host}/api/coordinator/auth/addstudent`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ guide, token: localStorage.getItem("token").split(",")[0] }),
		});
		const json = await response.json();
		console.log(json);
	};

	return <CoordinatorContext.Provider value={{ createUser, login, addStudent }}>{props.children}</CoordinatorContext.Provider>;
};

export default CoordinatorState;
