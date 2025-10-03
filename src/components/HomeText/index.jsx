import TextType from "@/assets/animations/TextType";
import './style.css'

const HomeText = () => {
  return (
    <div className="w-[70%] h-[40%] flex align-center justify-center relative">
      <TextType 
        text={["HELLO WORLD!"]}
        typingSpeed={180}
        deletingSpeed={120}
        pauseDuration={1000}
        className="blackfuture"
      />
    </div>
  )
}

export default HomeText
