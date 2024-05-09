import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.Suspense>
  </React.StrictMode>,
)


