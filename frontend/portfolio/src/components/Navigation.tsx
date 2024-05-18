import { useState } from "react";

export function Navigation({ title, isSelected }: { title: string; isSelected : boolean }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="flex space-x-4 hover:cursor-pointer" onMouseEnter={() => { setIsHovered(true); }}
        onMouseLeave={() => { setIsHovered(false); }}>
            <div className="flex flex-col justify-center items-center">
                <div className={`flex h-0.5 ${isHovered||isSelected ? 'bg-white w-16' : 'bg-slate-600 w-10'} transition-width duration-300 `}></div>
            </div>
            <div className={`flex ${isHovered||isSelected ? 'text-white' : 'text-slate-600'} font-tilt-neon font-semibold text-sm`}>
                {title}
            </div>
        </div>
    );
}
