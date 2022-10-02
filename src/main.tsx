import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
