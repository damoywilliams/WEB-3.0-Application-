import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import{DatabaseProvider} from './context/DatabaseContext';



ReactDOM.render(
  <BrowserRouter>
  <DatabaseProvider>
  <React.StrictMode>

   <App />
   
  </React.StrictMode>
  </DatabaseProvider>
  </BrowserRouter>,
  
  
  document.getElementById('root')
)
