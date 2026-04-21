import React from 'react'

function Warning(props) {
    let message;
    let colorClass;
    if (!props.isVisible) return null;
    if (props.value > 200) {
        message = "Limit Exceeded! Please reduce the text."
        colorClass = "danger"
    }
    else if (props.value >= 160) {
        message = "Almost there! 200 limit Approached almost."
        colorClass = "caution"
    }
    
    return (
        <>
        <div className={`${colorClass}`}>
            <p> {message}</p>
        </div>
        </>
    )
}

export default Warning