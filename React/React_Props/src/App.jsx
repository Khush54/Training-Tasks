// import React from 'react'
// import Student from './Components/Student'
// import './App.css'

// function App() {
//   return (
//     <>
//     <div>
//       <h2> Props Example</h2>
//       <Student name="Khushpreet" age={21}/>
//       <Student name="Harman" age={25}/>
//     </div>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import './App.css'
// import Student from './Components/Student'
// import Note from './Components/Note'

// function App() {
//   return (
//    <>
//     <Note content = "React Props."/>

//     <Note>
//       <h2>Props Introduction</h2>
//       <p>Props are used to pass the data from parent componet to chidl component.</p>
//       <button>Read More</button>
//     </Note>

//     <Note>
//       <Student name="Khushpreet" age={21}/>
//     </Note>
//    </>
//   )
// }

// export default App


// import './App.css'
// import StudentItem from './Components/StudentItem'
// import React from 'react'

// function App() {

//   function recieveFeedback(message){
//     alert(`Message recievd from Chid Component: ${message}`)
//   }

//   return (
//    <>
//    <h1>Child to Praent Props Example</h1>
//    <StudentItem sendFeedback = {recieveFeedback}/>
//    </>
//   )
// }

// export default App


import './App.css'
import StudentList from './Components/StudentList'
import AddStudent from './Components/AddStudent'

import React, { useState } from 'react'

function App() {
  const [student, SetStudent] = useState(["Khushpreet", "Sahid"]);

  function addNewStudent(name) {
    console.log("New Student Name Recieved as: ", name)
    SetStudent([...student, name])
  }

  return (
    <>
      <h1>Sibling to Sibling</h1>
      <AddStudent setNewStudent={addNewStudent} />
      <StudentList student={student} />
    </>
  )
}

export default App