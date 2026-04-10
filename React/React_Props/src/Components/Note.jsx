import React from 'react'

function Note(props) {
    return (
    <>
    <div style ={{
        padding: "20px",
        border : "2px solid White ",
        color: "White",
        margin: "10px"
    }}>
    {props.content}
    {props.children}
    </div>
    </>
    )
};

export default Note