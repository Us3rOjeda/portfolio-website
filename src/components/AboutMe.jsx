function AboutMe({ darkMode, isEnglish }) {
  return (
    <section id='about-me' className='relative'>
      <h1 className={`m-6 text-5xl sm:text-[150px] sm:m-10 font-times font-semibold ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1a1a1a]'}`}>
        {`${isEnglish ? 'About Me,' : 'Sobre Mí,'}`}
      </h1>
      <p className={`m-6 w-[340px] sm:w-[800px] sm:m-10 sm:text-3xl ${darkMode ? 'text-white' : 'text-black toggle-color'}`}>
        {isEnglish ? (
          <>
            I am a <span className='font-bold'>Frontend Web Developer</span> interested in solving problems in an <span className='font-bold'>analytical</span> and <span className='font-bold'>collaborative</span>
            way to provide the best possible user experience, meeting the <span className='font-bold'></span>requirements demanded by your company.
            Additionally, I am passionate about staying up-to-date with the latest technological trends in the field to 
            ensure <span className='font-bold'>innovative</span> and <span className='font-bold'>efficient</span> solutions.
          </>
        ) : (
          <>
            Soy un <span className='font-bold'>Desarrollador Web Frontend</span> interesado en resolver problemas de manera 
            <span className='font-bold'> analítica</span> y <span className='font-bold'>colaborativa</span> para proporcionar 
            la mejor experiencia de usuario posible, cumpliendo con los <span className='font-bold'></span>requisitos exigidos 
            por su empresa. Además, me apasiona mantenerme al día con las últimas tendencias tecnológicas en el campo para garantizar 
            soluciones <span className='font-bold'>innovadoras</span> y <span className='font-bold'>eficientes</span>.
          </>
        )}
      </p>
      <div className={`sm:grid grid-cols-2 ${darkMode ? 'text-white' : 'text-black toggle-color'}`}>
        <div className='flex flex-col gap-8 m-10'>
          <p className="sm:text-3xl font-bold">{`${isEnglish ? 'Languages:' : 'Lenguajes:'}`}</p>
          <p className='sm:text-2xl font-bold'>{`${isEnglish ? 'Spanish | Native' : 'Español | Nativo'}`}</p>
          <p className='sm:text-2xl font-bold'>{`${isEnglish ? 'English | B2' : 'Inglés | B2'}`}</p>
        </div>
        <div className='flex flex-col gap-8 m-10'>
          <a href='/curriculum-vitae.pdf' download='Maximo Ojeda C.V.pdf' className={`flex justify-center items-center hover:scale-95 ${darkMode ? 'bg-gray-600' : 'bg-gray-800'} text-white cursor-pointer sm:text-3xl font-bold w-[250px] h-[60px] rounded-sm hover:bg-gray-400 transititon ease-in-out duration-300`}>
            {`${isEnglish ? 'Download C.V.' : 'Descargar C.V.'}`}
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe