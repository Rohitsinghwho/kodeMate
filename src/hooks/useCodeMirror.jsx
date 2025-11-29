import React from 'react'
import { EditorView} from '@codemirror/view'
import { basicSetup } from 'codemirror'
import {EditorState} from "@codemirror/state"
import {javascript} from "@codemirror/lang-javascript"
import {html} from "@codemirror/lang-html"
import {css} from "@codemirror/lang-css"
import { useEffect,useRef,useState } from 'react'

const getExtension=(language)=>{
    switch(language){
        case 'js':return [javascript()];
        case 'html':return [html()];
        case 'css':return [css()];
        default: return [javascript()];
    }
}
export const useCodeMirror = ({value,onChange,language="js"}) => {
  
    const ref= useRef(null);
    const [editor,setEditor]=useState(null);

    useEffect(()=>{
        // if editor already  in dom
        if(editor&&editor.state.doc.toString()!==value){
            editor.dispatch({
                changes:{
                    from:0,
                    to:editor.state.doc.length,
                    insert:value
                }
            })
        }


    },[value,editor])

    // mount editor for first time

    useEffect(()=>{
        if(!ref.current)return;

        const el=ref.current;
        const extensions=getExtension(language);
        const view=new EditorView({
            state:EditorState.create({
                doc:value,
                
                extensions:[
                    basicSetup,
                    ...extensions,


                    // direct onchange callbacks
                    EditorView.updateListener.of((update)=>{
                        if(update.docChanged){
                            onChange(update.state.doc.toString())
                        }
                    }),
                ],
            }),
            parent:el
        });
        setEditor(view);
        return ()=>view.destroy()
    },[])

    return {ref};
}
