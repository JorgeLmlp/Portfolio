import './App.css';
import MyHeader from './components/MYHeader';
import homeImage from './assets/images/homeimage.png';
import HomeText from './components/HomeText';
import { FooterHome } from './components/FooterHome';
import { AboutMeBtn } from './components/AboutMeBtn';
import { Page2Title } from './components/Page2Title';



function App() {

  const page2Style = {
    background: 'linear-gradient(180deg, rgb(var(--azul-medio)) 0%, rgb(var(--azure)) 100%)',
  };

  return (
    <div id='main'>
      <div id='home' className='homeContainer'>
        <MyHeader />
        <HomeText />
        <div id='homeImage' className='absolute top-50'>
          <img className='z-00' src={homeImage} alt='home' />
        </div>
        <FooterHome />
      </div>
      <div id='page2' className=' w-full h-[100vh] flex justify-center items-center' style={page2Style}>
        <div id='page2Container'className='bg-gradient-to-b from-[rgb(var(--azul-medio))] to-[rgb(var(--azure))] w-[0%] h-full '>
          <Page2Title></Page2Title>
          <div id='btnContainer' className='flex w-max h-[50vh]'>
            <AboutMeBtn />
          </div>
        </div>
      </div>

    </div>
  

  );
}

export default App;
