function ContactMe({ darkMode }) {
  return (
    <section id='contact-me' className={`${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'} relative`}>
      <h1 className={`text-5xl m-6 sm:text-[150px] sm:m-10 font-times font-semibold ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1a1a1a]'} toggle-color`}>Contact Me</h1>
      <ul className={`text-xl w-[220px] m-6 sm:w-[600px] grid sm:text-3xl sm:grid-cols-2 sm:m-12 gap-10 font-bold ${darkMode ? 'text-white' : 'text-black'} toggle-color`}>
        <li className={`border-b pb-1 ${darkMode ? 'border-[#e5e5e5]' : 'border-[#1a1a1a]'} toggle-color`}><a className='hover:text-[#3a3a3a] transition transform ease duration-200' href='https://www.linkedin.com/in/us3r0jeda6161/'>Linkedin</a></li>
        <li className={`border-b pb-1 ${darkMode ? 'border-[#e5e5e5]' : 'border-[#1a1a1a]'} toggle-color`}><a className='hover:text-[#3a3a3a] transition transform ease duration-200' href='https://www.getonbrd.com/p/maximo-ojeda'>GetOnBoard</a></li>
        <li className={`border-b pb-1 ${darkMode ? 'border-[#e5e5e5]' : 'border-[#1a1a1a]'} toggle-color`}><a className='hover:text-[#3a3a3a] transition transform ease duration-200' href='https://www.malt.es/profile/maximoojeda'>Malt</a></li>
        <li className={`border-b pb-1 ${darkMode ? 'border-[#e5e5e5]' : 'border-[#1a1a1a]'} toggle-color`}><a className='hover:text-[#3a3a3a] transition transform ease duration-200' href='https://github.com/Us3rOjeda'>GitHub</a></li>
      </ul>
    </section>
  )
}

export default ContactMe