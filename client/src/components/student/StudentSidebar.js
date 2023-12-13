import React from 'react'
import StudentTodo from './StudentTodo'

const StudentSidebar = () => {
  const name = "Basit"
  const section = "section"
  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className='h1 mt-4'>
        Research House
      </div>
      <div className='h3 mt-2'>
        Hi {name}
      </div>
      <div className='container mt-3 py-2' style={{ backgroundColor: "#E1F8FF",width:"90%",height:"fit-content",borderRadius:"10px"}}>
        ongoing {section}
        <div></div>
        deadline : dd/mm/yyyy
      </div>
      <StudentTodo />
      <StudentTodo />
    </div>
  )
}

export default StudentSidebar
