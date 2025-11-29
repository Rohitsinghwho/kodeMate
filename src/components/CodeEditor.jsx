import React, { useState } from 'react'
import { useCodeMirror } from '../hooks/useCodeMirror'
const CodeEditor = ({lang="js"}) => {
  const [code,setCode]=useState("");
  const {ref}= useCodeMirror({
    value:code,
    onChange:setCode,
    language:lang
  })
  return (
    <div className="codeEditor" ref={ref} />
  )
}

export default CodeEditor