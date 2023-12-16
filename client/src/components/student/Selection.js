import React, { useContext, useMemo } from 'react'
import GuideAllotmentContext from '../../Context/GuideAllotmentContext';

const Selection = () => {
    const dropdowns = [...Array(4).keys()]; // Array to map through for dropdowns

    const dropdown = {
        width: "80%",
        height: "40%",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        border: "none",
        color: "#004257",
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: "Roboto, sans-serif",
        marginBottom: "20px",
    };

    const context = useContext(GuideAllotmentContext);
    // const {progress,domain} = context
    const handleDropdownChange = (event, dropdownNo) => {
        const { value } = event.target;
        console.log(value)
    };

    const handleSelectNext = async () => {
        var flag = true;
        var newParagraph = document.createElement("p");
        newParagraph.textContent = "Please Select a domain";
        var tempDomain = [];
        [1, 2, 3, 4].forEach(element => {
            let p = document.getElementById(`preference${element}`)
            if (p.value === "Select Domain") {
                flag = false
            }
            tempDomain.push(p.value)
        });
        console.log(tempDomain)
        if (flag) {
            await context.addDomain(tempDomain)
            context.changeProgress("domainConfirm");
        }
        else {
            var node = document.getElementById("selectDomain");
            node.appendChild(newParagraph);
            
            console.log(node.lastChild);
            
        }
    }


    return (
        <div>
            <form action="submit" method='post' id='selectDomain'>
                <div className='d-flex flex-column' >
                    {dropdowns.map((index) => (
                        <div
                            className='d-flex mb-3'
                            key={index}
                            id={`p${index + 1}`}
                        >
                            <label
                                htmlFor={`dropdown${index + 1}`}
                                className='form-label'
                                style={{
                                    minWidth: "150px",
                                    marginRight: "10px",
                                }}
                            >
                                Preference {index + 1}:
                            </label>
                            <select
                                className='form-select'
                                id={`preference${index + 1}`}
                                onClick={(e) => handleDropdownChange(e, `${index + 1}`)}
                            >
                                {
                                    context.domain.map((opt) => {
                                        return <option value={opt}>{opt}</option>
                                    })
                                }

                            </select>
                        </div>
                    ))}
                </div>
                <div className="btn" onClick={handleSelectNext} style={{ marginLeft: "90%", backgroundColor: "#004257", color: "white" }}>Next</div>
            </form>
        </div>
    )
}

export default Selection
