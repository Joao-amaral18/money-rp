import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'website freelance',
          category: 'Dev',
          type: 'deposit',
          amount: 6000,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'work',
          category: 'Dev',
          type: 'deposit',
          amount: 16000,
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'rent',
          category: 'home',
          type: 'withdraw',
          amount: 1220,
          createdAt: new Date('2022-09-21')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
