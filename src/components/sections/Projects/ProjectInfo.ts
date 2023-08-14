import { ProjectModel } from "../../../models/ProjectModel";

export const projectInfo: ProjectModel[] = [
    { 
        title:"Personal Website", 
        image:require("../../../assets/images/projects/personal-website.png"), 
        skills:["React", "Typescript", "CSS", "HTML"], 
        links:[{name: "Repository", url:'https://github.com/lucasdj25/personal-website'}],
        description: "This project is a static website which I built myself in order to show my skills, interests, and ongoing projects. " +
        "The tooling I used for this project was React with Typescript and hosting with GitHub pages. The part of this project I enjoyed " +
        "the most is the complete creative freedom when it came to designing the layout and styling of the webpage. Since I built this " +
        "webpage without any sort of template I took my time designing each piece of the page until it looked exactly how I wanted it. I " +
        "also purposely avoided using any type of styling framework or templates in order to further improve experience with CSS, particularly " +
        "being able to implement a web app that looks and performs good on devices of varying screen sizes. " +
        "The frontend part of Web development is currently my favorite programming domain and I have experience with TypeScript, JavaScript, " +
        "HTML, CSS, as well as a couple different frontend frameworks such as React and VueJS."
    }
]