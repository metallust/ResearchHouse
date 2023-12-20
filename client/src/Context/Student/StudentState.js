import StudentContext from "./StudentContext";

const StudentState = (props)=>{
    const host = "http://localhost:5000";

    // const setStudentDetails = async(email,name,mobile)=>{
    //     const response = await fetch(`${host}/api/coordinator/auth/login`, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({ email, password }),
	// 	});
	// 	const json = await response.json();
	// 	return json;
    // }

    const studentLogin = async(email,password)=>{
        const response = await fetch(`${host}/api/coordinator/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		const json = await response.json();
		return json;
    }



    return <StudentContext.Provider value={{studentLogin}}>{props.children}</StudentContext.Provider>;
}
export default StudentState;