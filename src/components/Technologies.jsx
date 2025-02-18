function Technologies ({ darkMode }) {
  return (
    <section id='technologies' className='relative w-full h-[100vh]'>
      <h1 className={`font-times text-[150px] font-semibold ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1a1a1a]'} m-10 toggle-color`}>Technologies,</h1>
      <div className='m-16 grid grid-cols-4'>
        <ul className={`flex flex-col gap-6 font-bold text-4xl ${darkMode ? 'text-[#d5d5d5]' : 'text-[#2a2a2a]'} toggle-color`}>
          <il>MySQL</il>
          <il>SQLite</il>
          <il>Node JS</il>
          <il>Express</il>
        </ul>
        <ul className={`flex flex-col gap-6 font-bold text-4xl ${darkMode ? 'text-[#d5d5d5]' : 'text-[#2a2a2a]'} toggle-color`}>
          <il>HTML</il>
          <il>CSS</il>
          <li>Tailwind CSS</li>
          <li>JavaScript (JS)</li>
          <li>TypeScript (TS)</li>
          <li>React</li>
          <li>Next JS</li>
        </ul>
        <ul className={`flex flex-col gap-6 font-bold text-4xl ${darkMode ? 'text-[#d5d5d5]' : 'text-[#2a2a2a]'} toggle-color`}>
          <li>GSAP</li>
          <li>Three JS</li>
          <li>Git</li>
        </ul>
      </div>
    </section>
  )
}

export default Technologies