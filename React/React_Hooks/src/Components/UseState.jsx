import React, { useState } from 'react'

function UseState() {
    const [count, updateCount] = useState(1);
  return (
    <>
    <h2>Increment Count using Use State Hook</h2>
    <h4>Count : {count} </h4>
    <button className= "counter" onClick={() => updateCount(count * 5)}>Increment</button>
    </>
  )
};

export default UseState