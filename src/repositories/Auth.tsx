import axios from "axios";
import { IMe } from "../typings/db";


class AuthRepository {

  async login(id: string, password: string) {
    const path = process.env.REACT_APP_API_URL + "auth/login"
    const ret = await axios.post(
      path,
      { email: id, password: password },
    );
    return ret;
  }

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
