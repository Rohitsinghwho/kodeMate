import React, { useContext} from 'react'
import EditorContext from '../../context/EditorContext'

const ExecutionContainer = () => {
  const {code}= useContext(EditorContext);
  return (
    <div className='browser'>
    <span className='txt-sm'>Your Browser &hearts;</span>
    <iframe
    className='browserframe'
    width={'80%'}
    title='Your Browser'
    height={"300px"}
    sandbox='allow-scripts'
    srcDoc={code.parsedCode}
    >
    </iframe>
    </div>
  )
}

export default ExecutionContainer