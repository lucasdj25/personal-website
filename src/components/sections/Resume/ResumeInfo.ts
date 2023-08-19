import { ResumeInfoModel } from '../../../models/ResumeInfoModel';

export const resumeWorkInfo: ResumeInfoModel[] = [
    {
        positions: [
            {
                title: "Full-time Associate Software Developer",
                startDate: "May 2023",
                endDate: "Present",
                desc: "After graduation I started a full-time developer position at Auto-owners, in this position I worked on the integrations team "
                    + "where I gained experience working with Groovy and Springboot applications as well as using Apache Kafka to implement data pipelines between company applications.",
            },
            {
                title: "Part-time Associate Software Developer",
                startDate: "January 2023",
                endDate: "May 2023",
                desc: "Starting in January of 2023 I returned to Auto-owners. I worked part-time during my last semester in college where I continued "
                    + "working on the same web app that we had created during my internship. The app had been released at this point and had a list of enhancements "
                    + "for me to add as well as adding a suite of unit tests using the Jest framework and integration and end-to-end tests using the Cypress Framework",
            },
            {
                title: "Intern Software Developer",
                startDate: "May 2022",
                endDate: "August 2022",
                desc: "During the summer of 2022 I interned for Auto-owners Insurance. My intern project was completed alongside "
                    + "another intern and was completely rewriting an existing application within the company with modern tooling and requirements. "
                    + "While in this position I learned how to develop web applications using React with Typescript for front end development and NestJS for the backend."
            }
        ],
        place: "Auto-Owners Insurance",
        img: require("../../../assets/images/resume/auto-owners-logo.png")
    }
]

export const resumeEducationInfo: ResumeInfoModel[] = [
    {
        positions: [
            {
                title: "Bachelors Degree",
                startDate: "September 2019",
                endDate: "May 2023",
                desc: "I graduated Summa Cum Laude from Grand Valley State University in Spring of 2023 with a Bachelor's Degree in Computer Science and a GPA of 3.9. "
                    + "My favorite project I worked on during my time at GVSU was my capstone project, where we were recruited by a small tech company who was in the process of "
                    + "completed rebuilding their website using modern tooling. For the project we utilized React with Typescript and the material design component library for the frontend "
                    + "and PHP with the Laravel framework for the backend."
            }
        ],
        place: "Grand Valley State University",
        img: require("../../../assets/images/resume/grand-valley-logo.webp")
    }, 
    {
        positions: [
            {
                title: "Highschool Diploma",
                startDate: "August 2015",
                endDate: "June 2019",
                desc: "I graduated from Fremont Public Highschool in Spring of 2019 with a GPA of 3.9. During my time in High school I partipated in multiple different "
                    + "extracurricular activities including soccer in the Fall and Winter and golf in the Spring. I was a soccer captain and was named all Conference and all District. "
                    + "I was also a member of my school's National Honor Society."
            }
        ],
        place: "Fremont Highschool",
        img: require("../../../assets/images/resume/packers-logo.png")
    }
]
