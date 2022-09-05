import axios from "axios";
import { Course, ICourse } from "../dto/Course";
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

    async getCourseById(id: string) {
        const path = process.env.REACT_APP_API_URL + `courses?id=${id}`
        const ret = await axios.get<ICourse>(path, {withCredentials: true});
        return ret.data
    }

    async getMyCourse() {
        const path = process.env.REACT_APP_API_URL + "courses/my"
        const ret = await axios.get<ICourse[]>(
            path,
            {
                withCredentials: true
            }
        );
        return ret.data
    }

    async createCourse(url: string, course: Course) {
        const ret = await axios.post<ICourse>(url, course);
        return ret;
    }

    async updateCourse(url: string, course: Course) {
        const ret = await axios.put<ICourse>(url, course);
        return ret;
    }
}

export default CourseRepository;
