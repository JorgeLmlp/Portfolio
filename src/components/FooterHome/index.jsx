import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"



export const FooterHome = () => {
    return (
                <div className="w-[100%] h-[10vh] grid grid-cols-2 grid-rows-2 justify-center items-center  absolute bottom-0 z-999">
        <div className="row-span-2 w-[100%] h-[100%] flex justify-center items-center ">
                aaaaaaaaaaaasas

            </div>
            <div />
            <div className="w-[100%] h-[100%] flex justify-end-safe align-middle items-center gap-5 text-center">
               <a href="">

                 <LinkedInLogoIcon className="w-[40px] h-[40px] text-white mb-10" />
                </a>
                <a href="">
                  <GitHubLogoIcon className="text-white w-[40px] h-[40px] mr-60 mb-10" />

                </a>
                
            </div>

        </div>
    )
}