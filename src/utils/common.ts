import { IEpisode, IVideo, IProgress } from '../typings/db';


export type CourseEpisode = IEpisode & { courseId: string, courseTitle: string };

export const findUniqueSeasonNumber = (videos: IVideo[] | { message: string }) => {
  if (videos.hasOwnProperty("message")) {
    return [];
  }
  const numbers = (videos as IVideo[]).map(
    (each) => each.seasonNumber
  )
  return Array.from(new Set(numbers));
}

export const findNextEpisode = (
  videos: IVideo[],
  currentEpisode: CourseEpisode
): CourseEpisode | null => {
  const currentVideoIndex = videos.findIndex(
    (each) =>
    (
      each.seasonNumber === currentEpisode.seasonNumber &&
      each.number === currentEpisode.number &&
      each.title === currentEpisode.title
    )
  )
  if (currentVideoIndex + 1 < videos.length) {
    const nextVideo = videos[currentVideoIndex + 1]
    return {
      title: nextVideo?.title as string,
      number: nextVideo?.number as number,
      duration: nextVideo?.duration as number,
      seasonNumber: nextVideo?.seasonNumber as number,
      courseId: currentEpisode.courseId,
      courseTitle: currentEpisode.courseTitle
    };
  } else {
    return null
  }
}

type DateToEpisode = {
  [date: string]: number
}
const zip = (x: any[], y: any[]) => x.map((each, i) => [each, y[i]]);

export const calculateProgressStatByDate = (progress: IProgress) => {
  /*
  input = {
    totalNumberOfEpisodes: 4,
    episodeNumbers: [1, 2, 4, 3],
    timesOfTaken: ["2022-09-27T03:04:05.600Z",
										"2022-09-27T03:06:30.976Z",
										"2022-09-26T15:00:00.000Z",
										"2022-09-27T03:24:17.892Z"]
  }

  output = [[25, 100]. [2022-09-26, 2022-09-27]]
  */
  const sorted = zip(progress.timesOfTaken, progress.episodeNumbers)
                  .sort();
  let dateToEpisode = {} as DateToEpisode;
  let numOfDoneEpisode = 0;

  sorted.forEach(
    (each) => {
      const [date,] = each;
      const yyyymmdd = date.split("T")[0];
      if ( Object.keys(dateToEpisode).length === 0 && !Object.hasOwn(dateToEpisode, yyyymmdd)) {
        dateToEpisode[yyyymmdd] = 1;
      } else {
        dateToEpisode[yyyymmdd] = numOfDoneEpisode + 1;
      }
      numOfDoneEpisode = dateToEpisode[yyyymmdd];
    }
  )
  
  const retProgressStat = Object
                            .values(dateToEpisode)
                            .map((each) => Math.round(100*(each/progress.totalNumberOfEpisodes)));
  const retDate = Object.keys(dateToEpisode);
  return [retProgressStat, retDate];
}
