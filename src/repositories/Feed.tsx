import axios from "axios";
import { Feed, IFeed } from '../dto/Feed';


class FeedRepository {
    async getFeeds(pageNo: number, size: number = 0){
        const ret = await axios.get<{totalPages: number, feeds: IFeed[]}>(
            process.env.REACT_APP_API_URL + `feeds?pageNo=${pageNo}?size=${size}`,
            {
                withCredentials: true
            }
        );
        return ret.data;
    }

    async getFeedsById(id: string) {
        const ret = await axios.get<IFeed>(
            process.env.REACT_APP_API_URL + `feeds?id=${id}`,
            {
                withCredentials: true
            }
        );
        return ret.data
    }

    async getFeedsByEmail(email: string, pageNo: number, size: number=0) {
        const ret = await axios.get<IFeed>(
            process.env.REACT_APP_API_URL + `feeds?email=${email}?pageNo=${pageNo}?size=${size}`,
            {
                withCredentials: true
            }
        );
        return ret.data
    }

    async createFeed(feed: Feed) {
        const ret = await axios.post<IFeed>(
            process.env.REACT_APP_API_URL + "feeds",
            feed,
            {
                withCredentials: true
            }
        );
        return ret;
    }

    async updateFeed(id: string, feed: Feed) {
        const ret = await axios.put<IFeed>(
            process.env.REACT_APP_API_URL + `feeds/${id}`,
            feed,
            {
                withCredentials: true
            }
        );
        return ret;
    }

    async deleteFeed(id: string) {
        const ret = await axios.delete<IFeed>(
            process.env.REACT_APP_API_URL + `/feeds/${id}`,
            {
                withCredentials: true
            }
        )
        return ret;
    }
}

export default FeedRepository;
