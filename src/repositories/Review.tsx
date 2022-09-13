import axios from "axios";
import { IReview } from "../dto/Review";
import { sampleReviews } from "../data/reviews";

class ReviewRepositry {
    async getReviews(id: string = ""){
        // const path = "/review"
        // const url = id === "" ? path : `${path}/id`
        // const ret = await axios.get<IReview[]>(url, {withCredentials: true});
        // return ret.data;
        return await sampleReviews;
    }

    async createReview(review: IReview) {
        const ret = await axios.post<IReview>(
            process.env.REACT_APP_API_URL + "/review",
            review,
        );
        return ret;
    }

    async updateReview(review: IReview) {
        const ret = await axios.put<IReview>(
            process.env.REACT_APP_API_URL + "/review",
            review,
        );
        return ret;
    }
}

export default ReviewRepositry;
