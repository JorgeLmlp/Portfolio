import './App.css';
import MyHeader from './components/MyHeader';

import homeImage from './assets/images/homeImage.png';
import HomeText from './components/HomeText';
import LiquidChrome from './components/background';



function App() {

  return (

    <div id='main'>
      <div id='home'>
        <MyHeader></MyHeader>
        <HomeText></HomeText>
          <div id='homeImage' className='absolute top-50'>
          <img src={homeImage} alt="" />

        </div>
        <div className='homeid'>
            
        </div>
    </div>
    </div>
  )
}


export default App
