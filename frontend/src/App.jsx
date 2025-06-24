import React from 'react'
import {Routes, Route} from 'react-router-dom'
import IntroForm from './pages/IntroForm'
import FilledOutPage from './pages/FilledOutPage'
const App = () => {
  return (
    <Routes>
      <Route path='/form' element={<IntroForm />}/>
      <Route path='/finished' element={<FilledOutPage />}/>
    </Routes>
  )
}

export default App