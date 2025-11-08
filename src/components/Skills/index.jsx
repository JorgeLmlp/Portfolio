
import './style.css';
import { SkillsBtn } from '../SkillsBtn';
export const Skills = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[rgb(var(--azure))] w-full h-full p-10'>
        <div className='w-[25%] border-b-5 border-[rgb(var(--azul-claro))]'><h3 className='border-b-var(rgb(--azure) blackfuture3 mr-3 text-[100px]'>SKILLS</h3></div>
        <div className="w-full h-[30vh] jusotify-items-center grid gap-y-0 gap-x-0 grid-wrap grid-rws-3 grid-cols-4">
            <SkillsBtn text= 'HTML5'/>
            <SkillsBtn text = 'CSS3'/>
            <SkillsBtn text = 'TAILWINDCSS'/>
            <SkillsBtn text = 'JAVASCRiPT'/>
            <SkillsBtn text = 'REACT'/>
            <SkillsBtn text = 'VITE'/>
            <SkillsBtn text = 'GIT'/>
            <SkillsBtn text = 'NODEJS'/>
            <SkillsBtn text = 'DJANGO'/>
            <SkillsBtn text = 'PYTHON'/>
            <SkillsBtn text = 'C#'/>
            <SkillsBtn text = 'MySQL'/>

                
        </div>
        </div>

    );
}