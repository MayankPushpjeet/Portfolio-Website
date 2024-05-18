// MainScreen.js
import { useState } from "react";
import { LeftPage } from "./LeftPage";
import { RightPage } from "./RightPage";

export function MainScreen() {
    const [currentView, setCurrentView] = useState<number>(0);

    // Function to scroll the right page so that the section aligns with the midpoint of the window height
    const scrollToSectionMidpoint = (sectionId:string) => {
        // const windowHeight = window.innerHeight;
        const element = document.getElementById(sectionId);
        const generalOffsetToAvoidBug = 5;
        if (element) {
            // const elementTop = element.getBoundingClientRect().top;
            const rightPageElement = document.getElementById('rightPage');
            if (rightPageElement) {
                console.log(element.offsetTop);
                const scrollTo = element.offsetTop - window.innerHeight/4 + generalOffsetToAvoidBug ;
                rightPageElement.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div id="mainScreenDiv" className="flex flex-col lg:flex-row md:flex-col sm:flex-col overflow-x-hidden w-screen bg-slate-900 h-screen px-10 lg:px-24 md:px-10 sm:px-10  overflow-y-auto lg:overflow-hidden md:overflow-y-auto sm:overflow-y-auto text-slate-400  justify-around">
            <LeftPage currentView={currentView} scrollToSectionMidpoint={scrollToSectionMidpoint} />
            <RightPage setCurrentView={setCurrentView} />
        </div>
    );
}
