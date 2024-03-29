import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import { ConteudoTarefa } from './Pages/ConteudoTarefa/index.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'tarefa/:id',
    element: <ConteudoTarefa />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
