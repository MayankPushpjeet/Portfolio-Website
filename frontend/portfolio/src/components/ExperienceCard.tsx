import { useState } from "react";

interface jobDetails{
    jobTitle : string; 
    company : string;
    jobDescription : string;
    technologiesUsed : string[];
    start : string;
    end : string
}

export function ExperienceCard(details:jobDetails){
    const [hovered,setHovered] = useState<boolean>(false);
    return <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row text-slate-400 lg:hover:bg-slate-800 rounded-md p-4 hover:text-white mb-10" onMouseEnter={()=>{
            setHovered(true);
    }} onMouseLeave={()=>{
        setHovered(false);
    }}>
            <div className="flex w-1/4 px-0 lg:px-4 md:px-4 sm:px-0">
                <p>{details.start} - {details.end}</p>
            </div>
            <div className="flex flex-col w-full lg:w-3/4  flex-wrap pl-0 sm:pl-0  md:pl-0 lg:pl-8 pt-2 sm:pt-2 md:pt-2 lg:pt-0">
                <div className={`flex font-semibold text-xl ${hovered? ' text-emerald-300' : 'text-white' }`}>
                    {details.jobTitle} <span className="flex mx-2">@</span> {details.company}
                </div>
                <p className={`flex mt-2 font-siliguri text-base `}>{details.jobDescription}</p>
                <div className="flex flex-wrap mt-2">
                    {details.technologiesUsed.map((tech) => (
                        <div className="flex  rounded-2xl bg-slate-700 text-teal-300 py-1 px-3 text-sm font-siliguri font-medium mt-2 mr-2 " key={tech}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
    </div>
}