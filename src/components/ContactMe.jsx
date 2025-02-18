function ContactMe({ darkMode }) {
  return (
    <section id='contact-me' className='relative'>
      <h1 className={`font-times text-[150px] font-semibold ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1a1a1a]'} m-10 toggle-color`}>Contact Me</h1>
      <ul className={`w-[600px] grid grid-cols-2 gap-10 text-3xl font-bold m-12 ${darkMode ? 'text-white' : 'text-black'} toggle-color`}>
        <li className={`border-b pb-1 ${darkMode ? 'border-[#e5e5e5]' : 'border-[#1a1a1a]'} toggle-color`}><a className='hover:text-[#3a3a3a] transition transform ease duration-200' href='https://www.linkedin.com/in/máximo-ojeda-517b80339/'>Linkedin</a></li>
        <li className={`border-b pb-1 ${darkMode ? 'border-[#e5e5e5]' : 'border-[#1a1a1a]'} toggle-color`}><a className='hover:text-[#3a3a3a] transition transform ease duration-200' href='https://www.getonbrd.com/p/maximo-ojeda'>GetOnBoard</a></li>
        <li className={`border-b pb-1 ${darkMode ? 'border-[#e5e5e5]' : 'border-[#1a1a1a]'} toggle-color`}><a className='hover:text-[#3a3a3a] transition transform ease duration-200' href='https://www.malt.es/profile/maximoojeda'>Malt</a></li>
        <li className={`border-b pb-1 ${darkMode ? 'border-[#e5e5e5]' : 'border-[#1a1a1a]'} toggle-color`}><a className='hover:text-[#3a3a3a] transition transform ease duration-200' href='https://github.com/Us3rOjeda'>GitHub</a></li>
      </ul>
    </section>
  )
}

export default ContactMe