import './App.css';
import MyHeader from './components/MYHeader';
import homeImage from './assets/images/homeimage.png';
import HomeText from './components/HomeText';



function App() {

  return (
    
    <div id='main'>
      <div id='home'>
        <MyHeader></MyHeader>
        <HomeText></HomeText>
          <div id='homeImage' className='absolute top-42'>
          <img className='z-00' src= {homeImage}></img>
        </div>
            
    </div>
        <div id='about' className='h-[100vh] w-[100%] bg-[#0B55B5] border-t-2 border-black grad'>

        </div>
    </div>
  )
}

export default App
