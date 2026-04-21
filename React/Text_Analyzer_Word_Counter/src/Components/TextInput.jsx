import React from 'react'
import { useEffect } from 'react';

function TextInput(props) {
  useEffect(() => {
    console.log("Focussing on Input box");
    if (props.textRef.current) {
      props.textRef.current.focus()
    }
  }, []);


  return (
    <>
      <div className='textInput'>

        <h2>INPUT BOX</h2>

        <textarea 
          name="textarea" 
          placeholder='Enter your text here....' 
          value={props.value} 
          onChange={(e) => props.onChangeText(e.target.value)} 
          ref={props.textRef} 
        >
        </textarea>

        <button 
          id='clear' 
          onClick={props.onClear}
        >
          Clear Text
        </button>
        
      </div>
    </>
  )
}

export default TextInput