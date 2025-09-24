import './style.css'
import settings from '../../assets/images/settings.png';
import Download from '../../assets/images/Download.png';
const MyHeader = () => {
  return (
    <header className="w-[80%] h-[6vh] flex align-center bg-[rgba(var(--azul-escuro),0.35)] rounded-lg fixed min-h-max max-h-full mt-4 md:w-80%">
        <div className='flex w-[10%] items-center justify-end'><img className='w-10 h-10' src={settings} alt="" /></div>
        <div className='flex w-[90%] justify-center items-center xl:gap-2 md:gap-20'>
            <a href="" className='text-[25px] text-white p-[1px] bg-[rgba(var(--azure))] w-[200px] text-center rounded-xl'>HOME</a>
            <a href="" className='text-[25px] hover:text-white hover:bg-[rgba(var(--azul-preto))]   text-gray-500 transition duration-200 p-[1px] bg-[rgba(var(--azure))] w-[200px] text-center rounded-xl'>ABOUT ME</a>
            <a href="" className='text-[25px] hover:text-white hover:bg-[rgba(var(--azul-preto))]  text-gray-500 transition duration-200 p-[1px] bg-[rgba(var(--azure))] w-[200px] text-center rounded-xl' >CONTACT</a>
            <a href="" className='text-[25px] hover:text-white hover:bg-[rgba(var(--azul-preto))] text-gray-500 transition duration-200 p-[1px] bg-[rgba(var(--azure))] w-[200px] text-center rounded-xl mr-[10%]'>SKILLS</a>
            <a id='CV' className='text-white justify-around flex bg-[rgba(var(--azure))] rounded-lg w-[140px] p-[5px]]' href="">MY CV<img className='ml-1' src={Download} alt="download" /></a>
        </div>
    </header>
  )
}
export default MyHeader;