import React from 'react'

function Student(props) {
  return (
    <>
    <div>
        <h3>Student Component</h3>
        <p>Student Name = {props.name}</p>
        <p>Student Age = {props.age}</p>
    </div>
    </>
  )
}

export default Student