import React, { useState, useRef, useCallback, useEffect } from 'react'
import TextInput from './Components/TextInput'
import Warning from './Components/Warning'
import Preview from './Components/Preview'
import AnalysisPanel from './Components/AnalysisPanel'
import './App.css'

function App() {
  const [text, updatedText] = useState("");
  const textRef = useRef(null);
  const [analysis, setAnalysis] = useState({
    words: 0,
    chars: 0,
    status: "Nothing"
  })

  function changedText(newText) {
    console.log("New text: ", newText);
    updatedText(newText);
  }

  function handleClear() {
    console.log("Cleared Text");
    updatedText("");
    if (textRef.current) {
      textRef.current.value = "";
      textRef.current.focus();
    }
  }

  const run = useCallback((inputText) => {
    console.log("Analysing");
    const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;
    const charCount = inputText.trim().length;
    let statusText;

    if (charCount === 0) {
      statusText = "Nothing"
    }
    else if (charCount < 160) {
      statusText = "Normal"
    }
    else if (charCount >= 160 && charCount <= 200) {
      statusText = "Warning"
    }
    else if (charCount > 200) {
      statusText = "Limit Exceeded"
    }
    
    setAnalysis({
      words: wordCount,
      chars: charCount,
      status: statusText
    });
  },[])

  useEffect(()=> {
    run(text);
  },[text,run]);



  return (
    <>
      <nav>
        <h1>Word Counter and Text Analyzer</h1>
      </nav>

      <Warning
        value={analysis.chars}
        isVisible={analysis.chars >= 160}
      >
      </Warning>

      <TextInput
        value={text}
        onChangeText={changedText}
        onClear={handleClear}
        textRef={textRef}
      >
      </TextInput>

      <Preview
        text={text}
      >
      </Preview>

      <AnalysisPanel
        words={analysis.words}
        char={analysis.chars}
        status={analysis.status}
      >
      </AnalysisPanel>

    </>
  )
}

export default App