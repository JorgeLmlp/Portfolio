
import './style.css'

export const SkillsBtn = (props) => {
    return(
        <div className='animationbtn w-[200px] h-[80px] bg-[rgb(var(--azul-escuro))] rounded-2xl text-center flex justify-center items-center cursor-default shadow-lg shadow-[rgba(0,0,0,0.4)] m-4'>
            <h4 className='text-[20px] text-white hover:text-[25px]'>{props.text}</h4>
        </div>

    )
}

