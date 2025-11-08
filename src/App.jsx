import './App.css';
import MyHeader from './components/MYHeader';
import homeImage from './assets/images/homeimage.png';
import HomeText from './components/HomeText';
import { FooterHome } from './components/FooterHome';
import { Skills } from './components/Skills';
import { Page2Title } from './components/Page2Title';
import { AboutText } from './components/TextReveal';
import ScrollFloat from './assets/animations/ScrollFloat/ScrollFloat';




function App() {

  const page2Style = {
    background: 'linear-gradient(180deg, rgb(var(--azul-medio)) 0%, rgb(var(--azure)) 100%)',
  };

  return (
    <div id='main'>
      <div id='home' className='homeContainer'>
        <MyHeader />
        <HomeText />  
        <div id='homeImage' className='absolute top-55 flex align-middle justify-center w-full h-full'>
          <img className='z-00 h-[80%]' src={homeImage} alt='home' />
        </div>
        <FooterHome />
      </div>
      <div id='page2' className=' w-full h-[200vh] flex justify-center ' style={page2Style}>
        <div id='page2Container'className='bg-gradient-to-b from-[rgb(var(--azul-medio))] to-[rgb(var(--azure))] w-[100%] h-full align-middle flex flex-col justify-center items-center '>
          <div className='w-full flex items-center   justify-center align-middle'>
          <Page2Title></Page2Title>
          
          </div>
          <ScrollFloat></ScrollFloat>
          <AboutText></AboutText>
        </div>
      </div>

      <div id='page3' className='p-[20%]w-[100%] h-[100vh] flex justify-center items-center bg-[rgba(var(--azure),1)]'>
        <div id='page4'>
        <Skills></Skills>
        </div>

       </div>
       
    </div>
  

  );
}

export default App;
