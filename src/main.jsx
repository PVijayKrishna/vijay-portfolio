import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

   {/*<div className='z-40 transitions-all duration-300'>


     className='lg:text-6xl lg:max-w-4xl  md:text-7xl md:max-w-xl  font-bold z-10 mb-6 '>*/}