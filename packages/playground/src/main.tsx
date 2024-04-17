import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { setupMonaco } from './monaco.ts';


setupMonaco().then(highlighter => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App highlighter={highlighter} />
    </React.StrictMode>,
  )
})
