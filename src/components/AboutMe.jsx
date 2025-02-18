function AboutMe({ darkMode }) {
  return (
    <section id='about-me' className='relative'>
      <h1 className={`font-times text-[150px] font-semibold ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1a1a1a]'} m-10`}>About Me,</h1>
      <p className={`w-[800px] m-10 text-3xl ${darkMode ? 'text-white' : 'text-black toggle-color'}`}>
        I am a <span className='font-bold'>Frontend Web Developer</span> interested in solving problems in an <span className='font-bold'>analytical</span> and <span className='font-bold'>collaborative </span>
        way to provide the best possible user experience, meeting the <span className='font-bold'></span>requirements demanded by your company. 
        Additionally, I am passionate about staying up-to-date with the latest technological trends in the field to 
        ensure <span className='font-bold'>innovative</span> and <span className='font-bold'>efficient</span> solutions.
      </p>
      <div className={`grid grid-cols-2 ${darkMode ? 'text-white' : 'text-black toggle-color'}`}>
        <div className='flex flex-col gap-8 m-10'>
          <p className="text-3xl font-bold">Languages:</p>
          <p className='text-2xl font-bold'>Spanish | Native</p>
          <p className='text-2xl font-bold'>English | B2</p>
        </div>
        <div className='flex flex-col gap-8 m-10'>
          <p className="text-3xl font-bold">Download CV</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe