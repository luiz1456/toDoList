import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ConteudoTarefa } from './Pages/ConteudoTarefa/index.tsx'

const router = createBrowserRouter([
  {
    path: 'toDoList/',
    element: <App />
  },
  {
    path: 'toDoList/tarefa/:id/',
    element: <ConteudoTarefa />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
