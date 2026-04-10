import React from 'react'

function StudentItem(props) {
  return (
   <>
   <button style={{
    width: "240px",
    padding: "10px 0",
    borderRadius : "10px",
    border: "none"
   }} 
   onClick={() => props.sendFeedback("StudentItem Child Sent hello to parent")}>
    Send Message to parent
   </button>
   </>
  )
}

export default StudentItem