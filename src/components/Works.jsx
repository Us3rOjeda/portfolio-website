import { useEffect, useState } from 'react';
import SolarisVideo from '../assets/works-videos/SOLARIS-compressed.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Works({ darkMode }) {

  return (
    <section id='works' className='relative w-full h-[100vh]'>
      <h1 id='works-title' className={`font-times text-[150px] font-semibold ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1a1a1a]'} m-10 toggle-color`}>
        Works,
      </h1>
      <div id='work-container' className='flex flex-row'>
        <div className='h-[560px] flex flex-col m-10 ml-12 gap-10'>
          <div className='w-[560px] h-[330px] relative'>
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
            <p className={`text-[18px] w-[540px] font-[400] ${darkMode ? 'text-[#e5e5e5]' : 'text-gray-800'} toggle-color`}>
              Fullstack development of an ecommerce platform, focusing on an intuitive user experience, modern design, and smooth navigation.
            </p>
            <ul className={`mt-8 flex gap-8 ${darkMode ? 'text-white' : 'text-black'} toggle-color`}>
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
