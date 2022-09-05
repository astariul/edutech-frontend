export interface IVideo{
    number: number,
    path: string
}

export interface Course
{
    title: string,
    category: string,
    description: string,
    image: string,
    level: string,
    instructorName: string,
    orgPrice: number,
    dcPrice?: number,
    tags?: string[]
}

export interface ICourse extends Course
{
    id: string,
    sold?: number,
    views?: number,
    thumbnail?: {
        url: string,
        width: number,
        height: number
    },
    videos: IVideo[]
}

export interface ICourseStat
{
    title: string,
    progess: {
        my: number[],
        average: number[],
        superCoder: number[],
        weekOnWeek: number,
    },
    currentCourse: string,
    nextCourse: string
}
