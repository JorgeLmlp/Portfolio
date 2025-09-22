import './App.css';
import MyHeader from './components/MyHeader'
import homeImage from './assets/images/homeImage.png';


function App() {

  return (
    
    <div id='main'>
      <div id='home'>
        <MyHeader></MyHeader>
        <div id='homeText'>
            <h1>HELLO WORLD</h1>
        </div>
          <div id='homeImage' className='absolute top-15'>
          <img src={homeImage} alt="" />

        </div>
        <div className='homeid'>
            
        </div>
    </div>
    </div>
  )
}

export default App
