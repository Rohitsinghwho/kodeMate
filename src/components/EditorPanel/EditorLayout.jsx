import React, { useContext} from 'react'

import CodeEditor from '../CodeEditor'
import EditorContext from '../../context/EditorContext'

const EditorLayout = () => {
 const {refs,code}=useContext(EditorContext);
  return (
    <div className='EditorLayout'>
      <div className='editor'>
      <span className='txt-sm'>HTML</span>
      <CodeEditor EditorTypeRef={refs.htmlRef} lang={"html"} codeValue={code.htmlCode} setCodeValue={code.setHtmlCode}/>
      </div>
      <div className='editor'>
        <span className='txt-sm'>CSS</span>
      <CodeEditor EditorTypeRef={refs.cssRef} lang={"css"} codeValue={code.cssCode} setCodeValue={code.setCssCode}/>
      </div>
      <div className='editor'>
        <span className='txt-sm'>JS</span>
      <CodeEditor EditorTypeRef={refs.jsRef} lang={"js"} codeValue={code.jsCode} setCodeValue={code.setJsCode}/>
      </div>

    </div>
  )
}

export default EditorLayout