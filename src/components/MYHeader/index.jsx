import './style.css'
import settings from '../../assets/images/settings.png';
import Download from '../../assets/images/Download.png';
import Config from './Config';
const MyHeader = () => {
  return (
      
    <header className="w-[80%] h-[6vh] flex align-center bg-[rgba(var(--azul-escuro),0.35)] rounded-lg fixed min-h-max max-h-full md:w-80%">
      <Config className = 'fixed'></Config>
        <div className='flex w-[10%] items-center justify-end'><img className='w-10 h-10' src={settings} alt="" /></div>
        <div className='flex w-[90%] justify-center items-center xl:gap-5 md:gap-20'>
            <a href="" className='text-[25px] text-white p-[1px] bg-[rgba(var(--azure))] w-[150px] text-center rounded-xl'>HOME</a>
            <a href="" className='text-[25px] hover:text-white hover:bg-[rgba(var(--azure),0.35)]   text-gray-500 transition duration-200 p-[1px] bg-[rgba(var(--azure))] w-[150px] text-center rounded-xl'>ABOUT ME</a>
            <a href="" className='text-[25px] hover:text-white hover:bg-[rgba(var(--azure).0350)]  text-gray-500 transition duration-200 p-[1px] bg-[rgba(var(--azure))] w-[150px] text-center rounded-xl' >CONTACT</a>
            <a href="" className='text-[25px] hover:text-white hover:bg-[rgba(var(--azure),o35)] text-gray-500 transition duration-200 p-[1px] bg-[rgba(var(--azure))] w-[150px] text-center rounded-xl mr-[5%]'>SKILLS</a>
            <a id='CV' className='text-white justify-around flex bg-[rgba(var(--azure))] rounded-lg w-[140px] p-[6px]]' href="">MY CV<img className='ml-1' src={Download} alt="download" /></a>
        </div>
    </header>
  )
}
export default MyHeader;