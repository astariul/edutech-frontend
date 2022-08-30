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
        const path = "/review"
        const ret = await axios.post<IReview>(path, review);
        return ret.data;
    }

    async updateReview(review: IReview) {
        const path = "/review"
        const ret = await axios.put<IReview>(path, review);
        return ret.data;
    }
}

export default ReviewRepositry;
