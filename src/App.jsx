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
          <div id='homeImage' className='absolute top-50'>
          <img className='z-00' src= {homeImage}></img>
        </div>
        <div className='homeid'>
            
        </div>
    </div>
    </div>
  )
}

export default App
