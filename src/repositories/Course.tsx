import axios from "axios";
import { ICourseVideo, ICourse, IEpisode, IProgress } from "../typings/db";


class CourseRepository {
  async getAllCourses(token: string){
    const ret = await axios.get<ICourse[]>(
        process.env.REACT_APP_API_URL + "courses",
        { headers: {Authorization: `Bearer ${token}`} }
    );
    return ret.data;
  }

  async getCourseById(token: string, courseId: string) {
    const path = process.env.REACT_APP_API_URL + `courses/${courseId}`;
    const ret = await axios.get<ICourseVideo>(
      path,
      { headers: {Authorization: `Bearer ${token}`} }
    );
    return ret.data
  }

  async getMyCourse(token: string) {
    const path = process.env.REACT_APP_API_URL + "courses/my"
    const ret = await axios.get<ICourseVideo[]>(
      path,
      { headers: {Authorization: `Bearer ${token}`} }
    );
    return ret.data
  }

  async getCurrentEpisode(token: string, courseId: string) {
    const path = process.env.REACT_APP_API_URL + `courses/my/current/${courseId}`
    const ret = await axios.get<IEpisode>(
      path,
      { headers: {Authorization: `Bearer ${token}`} }
    )
    return ret.data
  }

  async getSeasonEpisodes(courseId: string) {
    const path = process.env.REACT_APP_API_URL + `courses/season/${courseId}`
    const ret = await axios.get<IEpisode[]>(
      path,
    );
    return ret.data
  }

  async saveCurrentEpisode(token: string, courseId: string, epsideNumber: number) {
    const path = process.env.REACT_APP_API_URL
                + `courses/my/current/${courseId}/${epsideNumber}`
    const ret = await axios.post<{message: string}>(
      path,
      { id: courseId, number: epsideNumber },
      { headers: {Authorization: `Bearer ${token}`} }
    )
    return ret
  }

  async isCompletedEpisode(token: string, courseId: string, episodeNumber: number) {
    const path = process.env.REACT_APP_API_URL
                + `courses/my/iscompleted/${courseId}/${episodeNumber}`
    const ret = await axios.get<{result: string}>(
      path,
      { headers: {Authorization: `Bearer ${token}`} }
    )
    return ret.data["result"]
  }

  async completeEpisode(token: string, courseId: string, episodeNumber: number) {
    const path = process.env.REACT_APP_API_URL
                + `courses/complete/${courseId}/${episodeNumber}`
    const ret = await axios.put<{message: string}>(
      path,
      { id: courseId, number: episodeNumber },
      { headers: {Authorization: `Bearer ${token}`} }
    )
    return ret;
  }

  async getProgress(token: string, courseId: string) {
    const path = process.env.REACT_APP_API_URL
                + `courses/my/progress/${courseId}`
    const ret = await axios.get<IProgress>(
      path,
      { headers: {Authorization: `Bearer ${token}`} }
    )
    return ret.data;
  }

  async createCourse(url: string, course: ICourse) {
    const ret = await axios.post<ICourse>(url, course);
    return ret;
  }

  async updateCourse(url: string, course: ICourse) {
    const ret = await axios.put<ICourse>(url, course);
    return ret;
  }
}

export default CourseRepository;
