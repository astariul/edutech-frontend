import axios from "axios";
import { IMe, IAccount } from "../typings/db";


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

  async signup(user: IAccount) {
    const path = process.env.REACT_APP_API_URL + "auth/signup"
    const ret = await axios.post(path, user);
    return ret;
  }

  async sendMail(email: string) {
    const path = process.env.REACT_APP_API_URL + "auth/send-mail"
    const ret = await axios.post(path, {email: email})
    return ret;
  }

  async verifyNumber(email: string, authNum: number) {
    const path = process.env.REACT_APP_API_URL + "auth/verify-number"
    const ret = await axios.post(path, {email: email, authNum: authNum})
    return ret;
  }

  async kakaologin(token: string) {
    const path = process.env.REACT_APP_API_URL + "auth/kakao"
    const ret = await axios.get(
      path,
      { headers: {Authorization: `Bearer ${token}`} }
    )
    return ret;
  }
}

export default AuthRepository;
