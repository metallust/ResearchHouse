import GuideAllotmentContext from "./GuideAllotmentContext";
import { useState } from "react";

const GuideAllotmentState = (props) => {
    const host = "http://localhost:5000";
    const selection = ["selection", 0];
    const domainConfirm = ["confirm", 1];
    const allotment = ["allotment", 2];
    const [domain, setDomain] = useState(["Select Domain", "a", "b", "c", "d", "e", "f", "g"]);
    const [progress, setProgress] = useState(selection);
    var [selectedDomain, setSelectedDomain] = useState([])

    const addDomain = (domains) => {
        console.log("domains", domains);
        setSelectedDomain(domains);
        console.log("current domains", selectedDomain);
    }

    function changeProgress(to) {
        // console.log(to, progress)
        if (to === "selection") {
            setProgress(selection)
        }
        else if (to === "domainConfirm") {
            setProgress(domainConfirm)
        }
        else {
            setProgress(allotment)
        }
        // console.log(progress)
    }

    return (
        <GuideAllotmentContext.Provider value={{ progress, domain, changeProgress, selectedDomain, addDomain }}>
            {props.children}
        </GuideAllotmentContext.Provider>
    );
};

export default GuideAllotmentState;
