import axios from "axios";
import { ICourseVideo, ICourse, IEpisode } from "../dto/Course";
// import {sampleCourses} from '../data/courses';


class CourseRepository {
  async getAllCourses(){
    const ret = await axios.get<ICourse[]>(
        process.env.REACT_APP_API_URL + "courses",
        {withCredentials: true}
    );
    return ret.data;
      // return await sampleCourses;
  }

  async getCourseById(courseId: string) {
    const path = process.env.REACT_APP_API_URL + `courses/${courseId}`;
    const ret = await axios.get<ICourseVideo>(
      path,
      {withCredentials: true}
    );
    return ret.data
  }

  async getMyCourse(token: string) {
    const path = process.env.REACT_APP_API_URL + "courses/my"
    const ret = await axios.get<ICourseVideo[]>(
      path,
      {
        headers: {Authorization: `Bearer ${token}`},
        withCredentials: true
      }
    );
    return ret.data
  }

  async getCurrentEpisode(token: string, courseId: string) {
    // const path = process.env.REACT_APP_API_URL + `courses/my/current/${courseId}`
    // const ret = await axios.get<IEpisode>(
    //   path,
    //   {
    //     headers: {Authorization: `Bearer ${token}`},
    //     withCredentials: true
    //   }
    // )
    // return ret.data
    return {
      title: "HTML Master",
      number: 1,
      duration: 14.2,
      seasonNumber: 1,
    }
  }

  async getSeasonEpisodes(courseId: string) {
    const path = process.env.REACT_APP_API_URL + `courses/season/${courseId}`
    const ret = await axios.get<IEpisode[]>(
      path,
      {
        withCredentials: true
      }
    );
    return ret.data
  }

  async saveCurrentEpisode(courseId: string, epsideNumber: number) {
    const path = process.env.REACT_APP_API_URL
                + `courses/my/current/${courseId}/${epsideNumber}`
    const ret = await axios.post<{message: string}>(
      path,
      {
        withCredentials: true
      }
    )
    return ret.data
  }

  async isCompletedEpisode(courseId: string, epsideNumber: number) {
    const path = process.env.REACT_APP_API_URL
                + `courses/my/iscompleted/${courseId}/${epsideNumber}`
    const ret = await axios.get<boolean>(
      path,
      {
        withCredentials: true
      }
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
