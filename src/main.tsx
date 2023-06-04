import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Window from './components/Window'
import Wikia from './components/Windows/wikia';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Wikia />
    </main>
  </React.StrictMode>,
)
