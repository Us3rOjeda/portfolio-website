import { useState } from 'react'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Header from './components/Header'
import Technologies from './components/Technologies'
import Works from './components/Works'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`${isDarkMode ? 'bg-[#1a1a1a]' : ''} toggle-color relative`}>
      <Header darkMode={isDarkMode} setDarkMode={setIsDarkMode}/>
      <Works darkMode={isDarkMode} />
      <Technologies darkMode={isDarkMode} />
      <div className='lg:grid lg:grid-cols-2 lg:gap-24 w-full h-[90vh]'>
        <AboutMe darkMode={isDarkMode} />
        <ContactMe darkMode={isDarkMode} />
      </div>
    </div>
  )
}