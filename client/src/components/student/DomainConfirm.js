import React, { useContext } from 'react'
import GuideAllotmentContext from '../../Context/GuideAllotmentContext';

const DomainConfirm = () => {
const context = useContext(GuideAllotmentContext)

  const handleBack=()=>{
    context.changeProgress("selection");
}
  const handleConfirm=()=>{
    context.changeProgress("allotment");
}

  return (
    <div>
      <div className="btn" onClick={handleBack} style={{marginLeft:"90%",backgroundColor:"#004257",color:"white"}}>Back</div>
      <div className="btn" onClick={handleConfirm} style={{marginLeft:"90%",backgroundColor:"#004257",color:"white"}}>Confirm</div>
    </div>
  )
}

export default DomainConfirm
