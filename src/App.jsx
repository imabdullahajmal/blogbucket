import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App font-opensans'>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
