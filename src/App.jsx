import './App.css';
import MyHeader from './components/MYHeader';
import homeImage from './assets/images/homeimage.png';
import HomeText from './components/HomeText';
import { FooterHome } from './components/FooterHome';
function App() {
  // Inline fallback gradient using CSS variables (guarantees appearance even if Tailwind utility isn't generated)
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

      <div id='page2' className=' w-full h-[100vh]'>
        <div
          id='page2Container'
          className='bg-gradient-to-b from-[rgb(var(--azul-medio))] to-[rgb(var(--azure))] w-full h-full'>
          <div id='page2Title' className='w-[100%] h-[10vh] flex align-middle justify-center mt-2'> <h2>JORGE LUIS</h2> </div>
        </div>

      </div>
    </div>

  );
}

export default App;
