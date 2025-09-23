import './style.css'
import settings from '../../assets/images/settings.png';
const MyHeader = () => {
  return (
    <header className="w-[90%] h-[6vh] flex align-center bg-[rgba(var(--azul-escuro),0.35)] rounded-lg fixed min-h-5 max-h-full mt-4">
        <div className='flex items-center w-[20%]'><img className=' w-10 h-10' src={settings} alt="" /></div>
        <div className='flex w-[80%] justify-center gap-25 items-center '>
            <a href="" className='text-white'>HOME</a>
            <a href="" className='hover:text-white text-gray-500 transition duration-200'>ABOUT ME</a>
            <a href="" className='hover:text-white text-gray-500 transition duration-200'>COTACT</a>
            <a href="" className='hover:text-white text-gray-500 transition duration-200'>SKILLS</a>
            <a id='CV' className='text-white ' href="">MY CV</a>
        </div>
    </header>
  )
}
export default MyHeader;