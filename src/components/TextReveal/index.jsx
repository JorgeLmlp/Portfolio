"use client";

import ScrollReveal from "@/assets/animations/TextReveal/ScrollReveal";
import ScrollFloat from '../../assets/animations/ScrollFloat/ScrollFloat';
import './style.css';
export const AboutText = () => {
    return (

        <section className=" text-white flex items-center flex-col justify-center w-[80%] h-[20vh]">
            <div className="w-max h-[20vh] blackfutureReveal ">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}

                >
                    WHO AM I?
                </ScrollFloat>
            </div>
            <div className="sticky top-0 h-[30vh] w-flex items-center justify-center">
                <ScrollReveal
                    containerClassName="max-w-8xl text-justify"
                    textClassName="text-gray-200"
                >
                    {"I'm Jorge, a passionate and dedicated software developer with a knack for crafting efficient and innovative solutions. With a strong foundation in various programming languages and frameworks, I thrive on transforming complex problems into seamless user experiences. My journey in tech has equipped me with the skills to adapt and excel in dynamic environments, always eager to learn and embrace new challenges. Let's build something amazing together!"}
                </ScrollReveal>
                <div className="w-full h-[20vh] blackfutureReveal align-middle justify-center flex ">

                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}

                    >
                        DIFERENCIALS

                    </ScrollFloat>
                </div>
                <div>
                    <ScrollReveal
                        containerClassName="max-w-8xl text-justify"
                        textClassName="text-gray-200"
                    >
                        {"My diferencials lie in my unwavering commitment to quality and collaboration. I bring a unique blend of technical expertise and creative problem-solving to every project, ensuring that solutions are not only functional but also user-centric. My ability to communicate effectively with cross-functional teams fosters a collaborative environment where ideas flourish. I am driven by a passion for continuous improvement, always seeking ways to enhance my skills and contribute meaningfully to the tech community."}
                    </ScrollReveal>
                    <div className="w-max h-[20vh] blackfutureReveal "></div>
                </div>
            </div>
        </section>
    );
};

export default AboutText;
