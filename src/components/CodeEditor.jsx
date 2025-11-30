import React from 'react'
import { useCodeMirror } from '../hooks/useCodeMirror'
const CodeEditor = ({EditorTypeRef,lang="js",codeValue,setCodeValue}) => {
  useCodeMirror({
    ref:EditorTypeRef,
    value:codeValue,
    onChange:setCodeValue,
    language:lang
  })
  return (
    <div className="codeEditor" ref={EditorTypeRef} />
  )
}

export default CodeEditor