import React, { useContext} from 'react'
import EditorContext from '../../context/EditorContext'

const ExecutionContainer = () => {
  const {code}= useContext(EditorContext);
  return (
    <iframe
    title='Your Browser'
    width={"100%"}
    height={"300px"}
    sandbox='allow-scripts'
    srcDoc={code.parsedCode}
    >
    </iframe>
  )
}

export default ExecutionContainer