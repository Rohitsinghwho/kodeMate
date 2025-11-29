import React from 'react'

import CodeEditor from '../CodeEditor'

const EditorLayout = () => {

  return (
    <div className='EditorLayout'>
      <div className='editor'>
      <span className='txt-sm'>HTML</span>
      <CodeEditor lang={"html"}/>
      </div>
      <div className='editor'>
        <span className='txt-sm'>CSS</span>
      <CodeEditor lang={"css"}/>
      </div>
      <div className='editor'>
        <span className='txt-sm'>JS</span>
      <CodeEditor lang={"js"}/>
      </div>

    </div>
  )
}

export default EditorLayout