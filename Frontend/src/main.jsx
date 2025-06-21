import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
)
