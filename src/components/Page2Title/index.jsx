  import  DecryptedText  from '@/assets/animations/DecryptedText/DecryptedText.jsx';
  import './style.css';

  export const Page2Title = () => {
      return (
          <div id='page2Title' className='blackfuture1 w-full h-[30vh] flex cursor-default align-middle justify-center items-center text-center'>
            <DecryptedText
            text =" Jorge"
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

