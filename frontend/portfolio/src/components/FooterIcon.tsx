import { useState } from "react";

interface FooterProps {
    src: string;
    alt?: string;
    link : string; // Optional alt text for accessibility
}

export function FooterIcon({ src, alt, link }:FooterProps){
    const [active,setActive] = useState<boolean>(false);
    return <a href={link} className={`flex ${active? 'bg-white' : 'bg-slate-400'} rounded-sm h-8 w-8 justify-center items-center`} onMouseEnter={()=>{
        setActive(true);
    }} onMouseLeave={()=>{
        setActive(false);
    }}>
        <img className="flex items-center h-6 w-6" src={src} alt = {alt || ''}></img>
    </a>
}