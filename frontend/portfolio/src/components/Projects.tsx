import { ProjectCard } from "./ProjectCard";
import AtsProjectImage from '../assets/AtsProject.png';
import PaymentAppImage from '../assets/Screenshot_2024-05-18-03-07-51-73_c1ebbaff44ba152fb7f7c2e1f7129fd1.jpg';
import foodOrderingWebsiteImage from '../assets/foodOrderingWebsiteImage.png';

export function Projects(){
    const AtsProjectDescription: string = "Created a full-stack app to manage resumes based on job roles. Integrated OpenAI GPT-3.5-turbo for resume classification. Frontend built with ReactJS and Tailwind CSS. Backend powered by Node.js and Express, handling file uploads and API requests with Multer."
    const paymentAppDescription : string = "Developed a Paytm clone application allowing users to sign in, sign up using JSON Web Tokens, and transfer funds to friends.Built frontend using React, Recoil, and TailwindCSS and backend using Node.js, Express, and MongoDB."
    const foodOrderingWebsiteDescription : string = "Built full responsive Frontend of a food ordering website using Html, Css and Javascript. Implemented Css flex-box properties to achieve responsiveness and javaScript for DOM Manipulation"

    return <div className="flex flex-col"> 
            <ProjectCard title="Application Tracking System" description={AtsProjectDescription} imageSrc={AtsProjectImage} link = "https://github.com/MayankPushpjeet/ATS-SYSTEM"></ProjectCard>
            <ProjectCard title="Demo Payment App" imageSrc={PaymentAppImage} description={paymentAppDescription} link="https://github.com/MayankPushpjeet/paytm"/> 
            <ProjectCard title="Food Ordering Website" imageSrc={foodOrderingWebsiteImage} description={foodOrderingWebsiteDescription} link = "https://mayankpushpjeet.github.io/Food-order.github.io/"/> 
    </div>
}