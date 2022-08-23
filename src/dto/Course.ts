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
    image: string,
    thumbnail?: {
        url: string,
        width: number,
        height: number
    }
}


export interface IUserProfile {
  token: string;
  name: string;
  email: string;
  avatar: string;
}
