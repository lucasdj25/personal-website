interface PositionModel {
    title: string
    startDate: string
    endDate: string
    desc: string
}

export interface ResumeInfoModel {
    positions: PositionModel[]
    place: string
    img: string
}