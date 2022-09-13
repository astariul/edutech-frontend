export interface IVideo {
  number: number;
  path: string;
  seasonNumber: number;
  title: string;
  duration: number;
}

export interface ICourse {
  title: string;
  category: string;
  description: string;
  image: string;
  level: string;
  instructorName: string;
  orgPrice: number;
  dcPrice?: number;
  tags?: string[];
  id: string;
  sold?: number;
  views?: number;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  },
}

export interface ICourseVideo {
  course: ICourse;
  videos: IVideo[] | { message: string };
}

export interface ICourseStat {
  id: string;
  title: string;
  progess: {
    my: number[];
    average: number[];
    superCoder: number[];
    weekOnWeek: number;
  },
  currentCourse: string;
  nextCourse: string;
}

export interface IEpisode {
  title: string;
  number: number;
  duration: number;
  seasonNumber: number;
}