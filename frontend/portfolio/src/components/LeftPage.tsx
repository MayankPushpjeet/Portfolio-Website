// LeftPage.js
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import { Navigation } from "./Navigation";

export function LeftPage({ currentView, scrollToSectionMidpoint }: { currentView: number, scrollToSectionMidpoint: (sectionId: string) => void }) {
    return (
        <div className="flex flex-col w-full lg:w-1/2 md:w-full sm:w-full py-20 lg:py-24 sm:py-20 md:py-20">
            <Intro />
            <div className="hidden lg:flex flex-col space-y-6 mt-16  md:hidden sm:hidden">
                <button onClick={() => scrollToSectionMidpoint("about")}><Navigation title="ABOUT" isSelected={currentView === 0} /></button>
                <button onClick={() => scrollToSectionMidpoint("experience")}><Navigation title="EXPERIENCE" isSelected={currentView === 1} /></button>
                <button onClick={() => scrollToSectionMidpoint("projects")}><Navigation title="PROJECTS" isSelected={currentView==2}></Navigation></button>
            </div>
            <Footer />
        </div>
    );
}
