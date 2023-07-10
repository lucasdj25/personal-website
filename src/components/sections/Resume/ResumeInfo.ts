import { ResumeInfoModel, ResumeInfoType } from '../../../models/ResumeInfoModel';

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
                    + "for me to add as well as adding a suite of unit test using the Jest framework and integration and end-to-end test using the Cypress Framework",
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
        type: ResumeInfoType.WORK,
        img: "/assets/auto-owners-logo.png"
    }
]

export const resumeEducationInfo: ResumeInfoModel[] = [
    {
        positions: [
            {
                title: "Bachelors Degree",
                startDate: "September 2019",
                endDate: "May 2023",
                desc: "TODO"
            }
        ],
        place: "Grand Valley State University",
        type: ResumeInfoType.EDUCATION,
        img: "/assets/grand-valley-logo.webp"
    }, 
    {
        positions: [
            {
                title: "High School Diploma",
                startDate: "August 2015",
                endDate: "June 2019",
                desc: "TODO"
            }
        ],
        place: "Fremont High School",
        type: ResumeInfoType.EDUCATION,
        img: "/assets/packers-logo.png"
    }
]
