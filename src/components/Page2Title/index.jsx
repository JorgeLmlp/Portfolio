  import  DecryptedText  from '@/assets/animations/DecryptedText/DecryptedText.jsx';
  import './style.css';

  export const Page2Title = () => {
      return (
          <div id='page2Title' className='blackfuture1 w-[100%] h-[30vh] flex justify-center items-center cursor-default'>
            <DecryptedText
            text =" Jorge Luis"
            speed={200}
            sequential={true}
            animateOn='both'
            maxIterations={1000}
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            />
          </div> 
        )}