import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header({ darkMode, setDarkMode, isEnglish }) {
  const [showButton, setShowButton] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { opacity: 1 } });

    tl.to('#name', { opacity: 1, y: 0 })
      .to('#employee-function', { opacity: 1, delay: 0.3 })
      .to('.a-from-nav', { opacity: 1, stagger: 0.2, delay: 0.6 });
  }, []);

  return (
    <header className={`w-full h-[100vh] flex flex-col justify-center items-center font-times`}>
      <nav className='hidden fixed sm:w-full top-0 h-24 sm:flex items-center justify-between pt-0 pb-0 pl-[4em] pr-[4em] z-[999]'>
        <div>
          <a className={`a-from-nav opacity-0 ${darkMode ? 'text-white' : ''} toggle-color`} href='#works'>{`${isEnglish ? 'Works' : 'Proyectos'}`}</a>
          <a className={`a-from-nav opacity-0 ${darkMode ? 'text-white' : ''} toggle-color`} href='#technologies'>{`${isEnglish ? 'Technologies' : 'Tecnologías'}`}</a>
        </div>
        <div>
          <a className={`a-from-nav opacity-0 ${darkMode ? 'text-white' : ''} toggle-color`} href='#about-me'>{`${isEnglish ? 'About Me' : 'Sobre Mí'}`}</a>
          <a className={`a-from-nav opacity-0 ${darkMode ? 'text-white' : ''} toggle-color`} href='#contact-me'>{`${isEnglish ? 'Contact Me' : 'Contacto'}`}</a>
        </div>
      </nav>
      <h1
        id='name'
        className={`text-center text-6xl sm:text-[200px] mb-10 opacity-0 translate-y-20 select-none ${darkMode ? 'text-white' : ''} toggle-color cursor-pointer`}
        onClick={() => setDarkMode(!darkMode)}
      >
        Máximo Ojeda
      </h1>
        <p
          id='employee-function'
          className={`text-xl sm:text-4xl font-sans font-light mb-10 opacity-0 ${darkMode ? 'text-gray-200' : 'text-gray-950'} toggle-color`}
        >
          {`${isEnglish ? 'Frontend Web Developer' : 'Desarrollador Web Frontend'}`}
        </p>
    </header>
  );
}

export default Header;