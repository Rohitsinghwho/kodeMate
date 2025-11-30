import React, { useContext } from 'react'
import EditorContext from '../context/EditorContext'
const Header = () => {
    const {code}=useContext(EditorContext)
    const handleCodeExecution=()=>{
       code.setParsedCode(`
        <!DOCTYPE html>
        <html>
          <head>
              <title>document</title>
              <style>${code.cssCode}</style>
          </head>
          <body>
            ${code.htmlCode}
            <script>
            ${code.jsCode}
            </script>
          </body>
        </html>
        
        `);
    }
  return (
    <nav className='nav'>
        <button onClick={handleCodeExecution}>Run</button>
    </nav>
  )
}

export default Header