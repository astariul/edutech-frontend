import { IUser } from './UserProfile';

export interface Feed {
    title: string,
    text: string,
    category: string
}

export interface IFeed extends Feed {
    id: string,
    user: IUser,
    images: string[],
    likeUser: string[],
    like: number,
    createdAt: string,
    updatedAt: string,
}
