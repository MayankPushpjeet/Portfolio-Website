import  { useEffect, useRef } from "react";
import { Experience } from "./Experience";
import { About } from "./About";
import { Projects } from "./Projects";

interface CredentialsProps {
    setCurrentView: (view: number) => void;
}

export function RightPage({ setCurrentView }: CredentialsProps) {
    const mainDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const about = document.querySelector('#about');
            const experience = document.querySelector('#experience');
            const projects = document.querySelector('#projects');

            const rect1 = about?.getBoundingClientRect();
            const rect2 = experience?.getBoundingClientRect();
            const rect3 = projects?.getBoundingClientRect();

            if (!rect1 || !rect2 || !rect3) return;

            const aboutTop = rect1.top;
            const experienceTop = rect2.top;
            const projectsTop = rect3.top;

            if(projectsTop <= window.innerHeight / 4 ){
                setCurrentView(2);
            }
            else if (experienceTop <= window.innerHeight / 4 ) {
                setCurrentView(1);
            } else if (aboutTop <= window.innerHeight / 4 ) {
                setCurrentView(0);
            }
        };

        const mainDiv = mainDivRef.current;
        if (mainDiv) {
            mainDiv.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (mainDiv) {
                mainDiv.removeEventListener('scroll', handleScroll);
            }
        };
    }, [setCurrentView]);

    return (
        <div className="flex flex-col lg:overflow-y-auto  lg:w-1/2 md:w-full sm:w-full lg:py-24 sm:py-4 md:py-8 hide-scrollbar lg:ml-10 md:ml-2 sm:ml-2" ref={mainDivRef} id="rightPage">
            <div id="about"><About /></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects/></div>
        </div>
    );
}
