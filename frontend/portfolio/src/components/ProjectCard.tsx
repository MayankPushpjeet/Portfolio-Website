import { useState } from "react";
interface projectDetails{
    imageSrc? : string; 
    title : string;
    description : string;
    link : string;
}

export function ProjectCard(details:projectDetails){
    const [hovered,setHovered] = useState<boolean>(false);
    return <a href={details.link} className="flex flex-col sm:flex-col md:flex-row lg:flex-row text-slate-400 lg:hover:bg-slate-800 rounded-md p-4 hover:text-white mb-10" onMouseEnter={()=>{
            setHovered(true);
    }} onMouseLeave={()=>{
        setHovered(false);
    }}>
            <div className="flex w-1/4 px-0 lg:px-4 md:px-4 sm:px-0">
                <img src = {details.imageSrc} className="h-16 w-28 rounded-sm"></img>
            </div>
            <div className="flex flex-col w-full lg:w-3/4 flex-wrap pl-0 sm:pl-0  md:pl-0 lg:pl-8 pt-2 sm:pt-2 md:pt-2 lg:pt-0 ">
                <div className={`flex flex-row flex-wrap ${hovered? ' text-teal-300':' text-white'} text-lg font-siliguri `}>
                    <p>
                        {details.title} 
                        <div className={`inline-block h-5 w-5 mx-0.5 transition-all duration-200 ${hovered? 'pl-1 pt-1':' pt-2'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 24">
                                <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" fill={`${hovered?'#4FD1C5':'white'}`}/>
                            </svg>
                        </div>
                    </p>
                </div>
                <div className={`flex mt-2 text-slate-400`}>
                    <p>
                        {details.description}
                    </p>
                </div>
            </div>
    </a>
}