import CoordinatorContext from "./CoordinatorContext";

const CoordinatorState = (props) => {

    const host = "http://localhost:5000"
    const createUser = async (arr) => {
        const response = await fetch(
            `${host}/api/coordinator/createuser`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":
                        localStorage.getItem('token'),
                }
            }
        );
        const json = await response.json()
    };
    const login = async (arr) => {
        const response = await fetch(
            `${host}/api/coordinator/login`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":
                        localStorage.getItem('token'),
                }
            }
        );
        const json = await response.json()
    };

    return (
        <CoordinatorContext.Provider value={{ createUser, login }}>
            {props.children}
        </CoordinatorContext.Provider>
    );
};

export default CoordinatorState