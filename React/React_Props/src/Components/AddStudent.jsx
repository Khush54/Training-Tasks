import React, { useState } from 'react'

function AddStudent({ setNewStudent }) {
    const [name, setName] = useState("")
    return (
        <>
            <div style={{
                padding: '20px',
            }}>
                <h2>Add New Student</h2>
                <input
                    placeholder='Enter your Name'
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width: "200px",
                        height: "30px",
                        borderRadius: "5px",
                        border: 'none',
                        outline: 'none',
                        marginRight: "10px"
                    }}
                />
                <button
                    style={{
                        width: "50px",
                        padding: "10px 0",
                        borderRadius: "10px",
                        border: "none"
                    }}
                    onClick={() => setNewStudent(name)}
                >
                    Add
                </button>
            </div>
        </>
    )
}

export default AddStudent