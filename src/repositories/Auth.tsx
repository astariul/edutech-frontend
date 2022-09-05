import axios from "axios";
import { IUserProfile } from "../dto/UserProfile";


class AuthRepository {

    async me() {
        const path = process.env.REACT_APP_API_URL + "auth/me"
        const ret = await axios.get<IUserProfile>(
            path,
            {
                withCredentials: true
            }
        );
        return ret;
    }
}

export default AuthRepository;
