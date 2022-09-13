export interface IUser {
  email: string,
  name: string,
  userId: string
}

export interface IUserProfile {
  name: string,
  email: string,
  avatar: string,
  token: string,
}


export interface IMe {
  token: string;
  email: string;
  name: string;
  myCourses: {
    numbersTaken: number[],
    courseId: string,
    numberCurrent: number,
    isFinished: boolean
  }[]
}

