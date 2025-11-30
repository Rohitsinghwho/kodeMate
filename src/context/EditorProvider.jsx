import React, { useCallback, useState } from 'react'
import EditorContext from './EditorContext'
import { useRef } from 'react';
const EditorProvider = ({children}) => {
 const [htmlCode,setHtmlCode]=useState('');
 const [cssCode,setCssCode]=useState('');
 const [jsCode,setJsCode]=useState('');
 const [parsedCode,setParsedCode]=useState('');
  const htmlRef=useRef(null);
 const cssRef=useRef(null);
 const jsRef=useRef(null);

 const getAllCode=useCallback(()=>({
    html:htmlCode,
    css:cssCode,
    js:jsCode
 }),[htmlCode,cssCode,jsCode])
  return (
    <EditorContext.Provider value={{
        refs:{htmlRef,cssRef,jsRef},
        code:{htmlCode,cssCode,jsCode,setHtmlCode,setJsCode,setCssCode,parsedCode,setParsedCode},
        getAllCode
        }}>
        {children}
    </EditorContext.Provider>
  )
}

export default EditorProvider