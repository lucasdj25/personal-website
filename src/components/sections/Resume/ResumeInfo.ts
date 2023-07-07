import { ResumeInfoModel, ResumeInfoType } from '../../../models/ResumeInfoModel';

export const resumeWorkInfo: ResumeInfoModel[] = [
    {
        title: "Associate Software Developer",
        startDate: "January 2023",
        endDate: "Present",
        place: "Auto-Owners Insurance",
        desc: "TODO",
        type: ResumeInfoType.WORK
    },
    {
        title: "Intern Software Developer",
        startDate: "May 2022",
        endDate: "August 2022",
        place: "Auto-Owners Insurance",
        desc: "TODO",
        type: ResumeInfoType.WORK
    }
]

export const resumeEducationInfo: ResumeInfoModel[] = [
    {
        title: "Bachelors Degree",
        startDate: "September 2019",
        endDate: "May 2023",
        place: "Grand Valley State University",
        desc: "TODO",
        type: ResumeInfoType.EDUCATION
    }
    ,{
        title: "High School Diploma",
        startDate: "August 2015",
        endDate: "June 2019",
        place: "Fremont High School",
        desc: "TODO",
        type: ResumeInfoType.EDUCATION
    }
]