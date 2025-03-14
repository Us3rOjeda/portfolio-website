import { useState } from 'react'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Header from './components/Header'
import Technologies from './components/Technologies'
import Works from './components/Works'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)

  return (
    <div className={`${isDarkMode ? 'bg-[#1a1a1a]' : ''} toggle-color relative`}>
      <Header darkMode={isDarkMode} setDarkMode={setIsDarkMode} isEnglish={isEnglish} />
      <Works darkMode={isDarkMode} isEnglish={isEnglish} />
      <Technologies darkMode={isDarkMode} isEnglish={isEnglish} />
      <div className='lg:grid lg:grid-cols-2 lg:gap-24 w-full h-[90vh]'>
        <AboutMe darkMode={isDarkMode} isEnglish={isEnglish} />
        <ContactMe darkMode={isDarkMode} isEnglish={isEnglish} />
      </div>
    </div>
  )
}