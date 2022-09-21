import { IEpisode, IVideo } from '../typings/db';


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