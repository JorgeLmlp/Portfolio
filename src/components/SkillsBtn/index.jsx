
import './style.css'

export const SkillsBtn = (props) => {
    return(
        <div className='animationbtn w-[340px] h-[80px] bg-[rgb(var(--azul-escuro))]  text-center flex justify-center items-center cursor-default shadow-lg shadow-[rgba(0,0,0,0.4)] m-4'>
            <h4 className='text-[25px] text-[rgba(var(--texto),1)] '>{props.text}</h4>
            {props.children}
        </div>

    )
}

