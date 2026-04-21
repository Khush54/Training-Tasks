import React from 'react'

function Preview(props) {
  return (
    <>
        <div className='preview'>
            <h2>Preview Text</h2>
            <div className="text-box">{props.text}</div>
        </div>
    </>
  )
}

export default Preview