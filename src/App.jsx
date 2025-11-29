import React from 'react'
import Header from './components/Header'
import EditorLayout from './components/EditorPanel/EditorLayout'
import ExecutionContainer from './components/ExecutionEnv/ExecutionContainer'

const App = () => {
  return (
    <div>
        <Header/>
        <EditorLayout/>
        <ExecutionContainer/>
    </div>
  )
}

export default App