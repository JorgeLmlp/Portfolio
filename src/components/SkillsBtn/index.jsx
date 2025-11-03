
import './style.css'

export const SkillsBtn = (props) => {
    return(
        <div className='w-[300px] h-[100px] bg-[rgb(var(--azul-escuro))] rounded-2xl'>
            <h1>{props.text}</h1>
        </div>

    )
}