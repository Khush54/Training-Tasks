import React from 'react'

function AnalysisPanel(props) {
  return (
    <>
    <div className='analysis'>
        <div className="analysis-box box-1">
            <h3>Characters</h3>
            <p>Number : {props.char}</p>
            <p>Remaining : {200 - props.char} </p>
        </div>
        <div className="analysis-box box-2">
            <h3>Words</h3>
            <p>Number : {props.words}</p>
        </div>
        <div className="analysis-box box-3">
            <h3>Status</h3>
            <p>Text : {props.status}</p>
        </div>
    </div>
    </>
  )
}

export default AnalysisPanel