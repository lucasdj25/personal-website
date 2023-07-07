export enum ResumeInfoType {
    EDUCATION = "education",
    WORK = "work"
}

export interface ResumeInfoModel {
    title: string
    startDate: string
    endDate: string
    place: string
    desc: string
    type: ResumeInfoType
}