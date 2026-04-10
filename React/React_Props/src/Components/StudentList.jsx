import React from 'react'

function StudentList({ student }) {
    return (
        <>
            <div style={{
                padding: '20px',
            }}>
                <h2>Student List</h2>
                {student.map((name, i) => <p key={i}>{name}</p>)}
            </div>
        </>

    )
}

export default StudentList