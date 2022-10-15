import axios from "axios";
import { IOrder } from '../typings/db';


class OrderRepository {
  async start(token: string, courseId: string){
     const ret = await axios.post<string>(
      process.env.REACT_APP_API_URL + "order/start",
      { courseId: courseId },
      { headers: {Authorization: `Bearer ${token}`} }
    );
    return ret.data;
    
  }

  async completeOrderById(token: string, orderId: string, paymentId: string | number) {
    const ret = await axios.post(
      process.env.REACT_APP_API_URL + `order/complete/${orderId}`,
      { paymentId: paymentId },
      { headers: {Authorization: `Bearer ${token}`} }
    );
    return ret
  }

  async getAllOrders(token: string) {
    const ret = await axios.get<IOrder[]>(
      process.env.REACT_APP_API_URL + "order",
      { headers: {Authorization: `Bearer ${token}`} }
    );
    return ret.data
  }

  async getOrderById(token: string, orderId: string) {
    const ret = await axios.get<IOrder>(
      process.env.REACT_APP_API_URL + `order/${orderId}`,
      { headers: {Authorization: `Bearer ${token}`} }
    );
    return ret;
  }

  async deleteOrderById(token: string, orderId: string) {
    const ret = await axios.delete(
      process.env.REACT_APP_API_URL + `order/${orderId}`,
      { headers: {Authorization: `Bearer ${token}`} }
    )
    return ret;
  }
}

export default OrderRepository;
