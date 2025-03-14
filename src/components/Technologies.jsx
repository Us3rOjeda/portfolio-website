function Technologies ({ darkMode, isEnglish }) {
  return (
    <section id='technologies' className='relative w-full h-[100vh]'>
      <h1 className={`text-5xl m-4 sm:text-[150px] sm:m-10 font-times font-semibold ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1a1a1a]'} toggle-color`}>
        {`${isEnglish ? 'Technologies,' : 'Tecnologías,'}`}
      </h1>
      <div className='m-6 grid grid-cols-2 sm:grid-cols-4 sm:m-16 sm:text-4xl'>
        <ul className={`flex flex-col gap-6 font-bold ${darkMode ? 'text-[#d5d5d5]' : 'text-[#2a2a2a]'} toggle-color`}>
          <il>MySQL</il>
          <il>SQLite</il>
          <il>Node JS</il>
          <il>Express</il>
        </ul>
        <ul className={`flex flex-col gap-6 font-bold ${darkMode ? 'text-[#d5d5d5]' : 'text-[#2a2a2a]'} toggle-color`}>
          <il>HTML</il>
          <il>CSS</il>
          <li>Tailwind CSS</li>
          <li>JavaScript (JS)</li>
          <li>TypeScript (TS)</li>
          <li>React</li>
          <li>Next JS</li>
        </ul>
        <ul className={`flex flex-col gap-6 font-bold ${darkMode ? 'text-[#d5d5d5]' : 'text-[#2a2a2a]'} toggle-color`}>
          <li>GSAP</li>
          <li>Three JS</li>
          <li>Git</li>
        </ul>
      </div>
    </section>
  )
}

export default Technologies