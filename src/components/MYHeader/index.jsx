import './style.css'
import Download from '../../assets/images/Download.png';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';

const MyHeader = () => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      const container = document.getElementById('container')
      container.style.backgroundColor = 'rgba(var(--azul-escuro),0.35)'
    } else {
      const container = document.getElementById('container')
      document.documentElement.classList.remove('dark');
      container.style.backgroundColor = 'rgba(var(--azul-escuro),0.35)'
    }
  }, [darkMode]);

  const handleCheckboxChange = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <header className="w-[80%] P-[20%] h-[6vh] flex justify-center items-center bg-[rgba(var(--azul-escuro),1)] rounded-lg min-h-max max-h-full md:w-80% fixed z-999 m-auto">
      <div className='flex w-[60%] justify-center items-center xl:gap-5 md:gap-0'>
        <a href="#" className='text-gray-500 text-[20px] hover:text-[rgba(var(--texto),1)] p-px w-[150px] text-center rounded-xl'>HOME</a>
        <a href="#page2" className='text-[20px] hover:text-[rgba(var(--texto),1)] text-gray-500 transition duration-200 p-px w-[150px] text-center rounded-xl'>ABOUT ME</a>
        <a href="#page4" className='text-[20px] hover:text-[rgba(var(--texto),1)] text-gray-500 transition duration-200 p-px w-[150px] text-center rounded-xl '>SKILLS</a>
        <a href="mailto:jorgelmlp2@gmail.com" className='text-[20px] hover:text-[rgba(var(--texto),1)] text-gray-500 transition duration-200 p-px w-[150px] text-center rounded-xl'>CONTACT</a>
      
      <div className='w-[20%] flex items-end  justify-around'>

      <div id='container' className='ModeContainer flex w-[30%] h-[80%] items-center justify-center border-white border-2 rounded-full'>
          <input
            id="checkbox"
            type="checkbox"
            checked={darkMode}
            onChange={handleCheckboxChange}
            className="absolute opacity-0 w-[30px] h-full z-10 cursor-pointer"
            />
          <span className="relative inset-0 flex items-center justify-center text-white pointer-events-none z-9">
            {darkMode ? <SunIcon className="ModeIcon text-white-100 w-[30px] h-10" /> : <MoonIcon className="ModeIcon text-white-100 w-[30px] h-10" />}
          </span>
        
      </div>
      </div>
        <a id='CV' className='DownloadCV text-white justify-around flex bg-[rgba(var(--azure),1)] rounded-lg w-[140px] p-1.5' href="#">
          MY CV <img className='CVimg ml-1' src={Download} alt="download" />
        </a>
            </div>
    </header>
  );
};

export default MyHeader;
