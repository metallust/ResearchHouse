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

    const handleSelectNext = () => {
        context.changeProgress("domainConfirm");
    }
    return (
        <div>
            <form action="submit" method='post'>
                <div className='d-flex flex-column'>
                    {dropdowns.map((index) => (
                        <div
                            className='d-flex mb-3'
                            key={index}
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
                                id={`dropdown${index + 1}`}
                                onClick={(e) => handleDropdownChange(e, `${index + 1}`)}
                            >
                                {
                                    context.domain.map((opt) => {
                                        return <option value={opt}>{opt}</option>
                                    })
                                }

                                {/* <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option> */}
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
