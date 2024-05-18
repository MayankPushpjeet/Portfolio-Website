import { ExperienceCard } from "./ExperienceCard";

export function Experience(){
    const adobeInternDescription : string = "Collaborated with the PhotoshopExpress iOS app UI team, enhancing over 10 workflows. Implemented a long-press gesture recognizer feature to improve user interaction and devised alternative button-based solutions when necessary."
    return <div className="flex flex-col h-fit space-y-10 mb-24">
        <ExperienceCard jobTitle="Product Engineer intern" jobDescription={adobeInternDescription} company="Adobe"  start="May'23" end="Jul'23" technologiesUsed={['Objective-C','C++', 'Swift','Xcode', 'SourceTree']}></ExperienceCard>
        <ExperienceCard jobTitle="Mentor" jobDescription="Provided expert guidance in competitive programming, Codeforces challenges, and data structures and algorithms. Resolved more than 300 student queries, enhancing problem-solving skills and algorithmic thinking." company="Tle Eliminators" start="Aug'23" end="Nov'23" technologiesUsed={['Data Structures and Algorithms', 'Discord']}/>
    </div>
}