export enum ResumeInfoType {
    EDUCATION = "education",
    WORK = "work"
}

interface PositionModel {
    title: string
    startDate: string
    endDate: string
    desc: string
}

export interface ResumeInfoModel {
    positions: PositionModel[]
    place: string
    type: ResumeInfoType
    img: string
}