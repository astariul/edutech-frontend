import axios from "axios";
import { IMe } from "../dto/UserProfile";


class AuthRepository {

    async me(token: string) {
        const path = process.env.REACT_APP_API_URL + "auth/me"
        const ret = await axios.get<IMe>(
            path,
            { headers: {Authorization: `Bearer ${token}`} }
        );
        return ret;
    }
}

export default AuthRepository;
