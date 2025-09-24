import TextType from "@/assets/animations/TextType";
import './style.css'

const HomeText = () => {
  return (
    <div className="w-[70%] h-[50%] flex align-middle justify-center relative top-[10%]">
      <TextType 
        text={["HELLO WORLD!", "MY NAME IS JORGE"]}
        typingSpeed={120}
        deletingSpeed={120}
        pauseDuration={1000}
        className="blackfuture"
      />
    </div>
  )
}

export default HomeText
