import React, { useContext } from 'react'
import GuideAllotmentContext from '../../Context/GuideAllotmentContext';

const DomainConfirm = () => {
const context = useContext(GuideAllotmentContext)
const dropdowns = [...Array(4).keys()]; // Array to map through for dropdowns
const domain = context.selectedDomain;
  const handleBack=()=>{
    context.addDomain([]);
    context.changeProgress("selection");
}
  const handleConfirm=()=>{
    context.changeProgress("allotment");
}

  return (
    <div>
      <div className='d-flex flex-column'>
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
                            <div>{domain[index]}</div>
                        </div>
                    ))}
                </div>


      <div className='d-flex'>
      <div className="btn" onClick={handleBack} style={{backgroundColor:"#004257",color:"white"}}>Back</div>
      <div className="btn" onClick={handleConfirm} style={{marginLeft:"80%",backgroundColor:"#004257",color:"white"}}>Confirm</div>
      </div>
      
    </div>
  )
}

export default DomainConfirm
