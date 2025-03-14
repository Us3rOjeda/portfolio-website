import { useEffect, useState } from 'react';
import SolarisVideo from '../assets/works-videos/SOLARIS-compressed.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Works({ darkMode, isEnglish }) {
  return (
    <section id='works' className='relative w-full h-[100vh]'>
      <h1 id='works-title' className={`text-5xl m-4 md:text-[150px] sm:m-10 font-times font-semibold ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1a1a1a]'} toggle-color`}>
        {`${isEnglish ? 'Works,' : 'Proyectos,'}`}
      </h1>
      <div id='work-container' className='flex flex-row'>
        <div className='h-[288px] m-4 sm:m-10 sm:ml-12 flex flex-col gap-10'>
          <div className='w-[330px] h-[210px] sm:w-[560px] sm:h-[330px] relative'>
            <video
              src={SolarisVideo}
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
            />
          </div>
          <div>
            <div>
              <div className='flex flex-row gap-8 justify-items-center'>
                <h2 
                  className={`text-xl tracking-wider pb-5 font-semibold ${darkMode ? 'text-white' : ''} cursor-pointer toggle-color`}
                >
                  SOLARIS E-COMMERCE
                </h2>
              </div>
            </div>
            <p className={`w-[320px] text-[18px] sm:w-[540px] font-[400] ${darkMode ? 'text-[#e5e5e5]' : 'text-gray-800'} toggle-color`}>
            {`${isEnglish ? 
              'Fullstack development of an ecommerce platform, focusing on an intuitive user experience, modern design, and smooth navigation.' : 
              'Desarrollo Fullstack de una plataforma ecommerce, enfocada en una experiencia de usuario intuitiva, diseño moderno y navegación fluida.'}`}
            </p>
            <ul className={`grid grid-cols-4 gap-2 mt-8 sm:flex sm:gap-8 ${darkMode ? 'text-white' : 'text-black'} toggle-color`}>
              <li className='font-bold'>MySQL</li>
              <li className='font-bold'>Node JS</li>
              <li className='font-bold'>Express</li>
              <li className='font-bold'>JS</li>
              <li className='font-bold'>React</li>
              <li className='font-bold'>Next JS</li>
              <li className='font-bold'>GSAP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;