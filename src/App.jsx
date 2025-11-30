import React from 'react'
import Header from './components/Header'
import EditorLayout from './components/EditorPanel/EditorLayout'
import ExecutionContainer from './components/ExecutionEnv/ExecutionContainer'
import EditorProvider from './context/EditorProvider'

const App = () => {
  return (
    <EditorProvider>
        <Header/>
        <EditorLayout/>
        <ExecutionContainer/>
    </EditorProvider>
  )
}

export default App