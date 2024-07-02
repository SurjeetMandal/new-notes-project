import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Frontend from './Frontend.jsx'
import Backend from './Backend.jsx'
import Interview from './Interview.jsx'
import Projects from './Projects.jsx'
import './Main.css'
import Chapter from './Chapter.jsx'
import Welcom from './Welcom.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Welcom />
    <Frontend />
    <Backend />
    <Interview />
    <Projects />
    <Chapter />
  </React.StrictMode>,
)
