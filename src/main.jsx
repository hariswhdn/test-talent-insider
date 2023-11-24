import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from '/src/_stores/index.js'
import App from '/src/App.jsx'
import '/src/_assets/css/preflight.css'
import '/src/_assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
