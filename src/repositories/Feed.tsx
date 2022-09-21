import axios from "axios";
import { Feed, IFeed } from '../typings/db';


class FeedRepository {
    async getFeeds(token: string, pageNo: number, size: number = 0){
        const ret = await axios.get<{totalPages: number, feeds: IFeed[]}>(
            process.env.REACT_APP_API_URL + `feeds?pageNo=${pageNo}&size=${size}`,
            { headers: {Authorization: `Bearer ${token}`} }
        );
        return ret.data;
    }

    async getFeedsById(id: string) {
        const ret = await axios.get<IFeed>(
            process.env.REACT_APP_API_URL + `feeds?id=${id}`,
        );
        return ret.data
    }

    async getFeedsByEmail(email: string, pageNo: number, size: number=0) {
        const ret = await axios.get<IFeed>(
            process.env.REACT_APP_API_URL + `feeds?email=${email}?pageNo=${pageNo}?size=${size}`,
        );
        return ret.data
    }

    async createFeed(feed: Feed) {
        const ret = await axios.post<IFeed>(
            process.env.REACT_APP_API_URL + "feeds",
            feed,
        );
        return ret;
    }

    async updateFeed(id: string, feed: Feed) {
        const ret = await axios.put<IFeed>(
            process.env.REACT_APP_API_URL + `feeds/${id}`,
            feed,
        );
        return ret;
    }

    async deleteFeed(id: string) {
        const ret = await axios.delete<IFeed>(
            process.env.REACT_APP_API_URL + `/feeds/${id}`,
        )
        return ret;
    }
}

export default FeedRepository;
