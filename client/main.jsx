// React basics
import React from 'react'
import { createRoot } from 'react-dom/client'

// Bring in the main App component
import App from './app.jsx'

// Enable live reloading of browser in _DEV_ mode using ESBuild
if (_DEV_) {
  new EventSource('/esbuild').addEventListener('change', () => location.reload())
}

// Render the basic app into the ROOT div
const container = document.getElementById('root')
const reactRoot = createRoot(container)
reactRoot.render(
  <App title="My React App Template">
    {'This is an example template based around React 18, ESBuild, and Standard JS.'}
  </App>
)
