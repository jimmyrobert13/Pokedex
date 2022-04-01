import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Components/style.css'
import Routes from './routes'

function App() {

  return (
    <Router>
      <Routes/> 
    </Router>
  )
}

export default App
