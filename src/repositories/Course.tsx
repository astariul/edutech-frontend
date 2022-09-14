import axios from "axios";
import { ICourseVideo, ICourse, IEpisode } from "../dto/Course";


class CourseRepository {
  async getAllCourses(){
    const ret = await axios.get<ICourse[]>(
        process.env.REACT_APP_API_URL + "courses",
    );
    return ret.data;
  }

  async getCourseById(courseId: string) {
    const path = process.env.REACT_APP_API_URL + `courses/${courseId}`;
    const ret = await axios.get<ICourseVideo>(
      path,
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

  async isCompletedEpisode(courseId: string, epsideNumber: number) {
    const path = process.env.REACT_APP_API_URL
                + `courses/my/iscompleted/${courseId}/${epsideNumber}`
    const ret = await axios.get<boolean>(
      path,
    )
    return ret.data
  }

  async createCourseSeason() {

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
