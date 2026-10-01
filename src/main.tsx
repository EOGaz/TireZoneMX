import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import './index.css'
import './firebase'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)
// Render the first frame synchronously so the sections exist before `load`
// (the inspo board scans [data-inspo] on load).
flushSync(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
