import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../Components/Profile'


function App() {

  return (
    <div className='container'>
     <h2>Welcome to react vite</h2>
     <h3 style={{backgroundColor:"yellow", color:"red"}}>
      <Profile/>
     </h3>
    </div>
  )
}

export default App
