import React from 'react'
import StudentSidebar from './StudentSidebar'
import DomainSelection from './DomainSelection'
const StudentDashboard = () => {
  var guide = "null";
  return (
    <div>
      {guide === null ? <DomainSelection /> :
        <div style={{ backgroundColor: "transparent", minHeight: "100vh", width: "21%" }}>
          <StudentSidebar />
        </div>
      }
    </div>
  )
}

export default StudentDashboard
