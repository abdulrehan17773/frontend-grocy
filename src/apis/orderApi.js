import axios from "axios";

export class OrdersService {

    async placeOrder ({address, phone, area_id, note, delivery_charges, total_price, cart }) {
        try {
           const response =  await axios.post(`/api/order/place`,{address, phone, area_id, note, delivery_charges, total_price, cart })
           return response.data;
        } catch (error) {
            throw error
        }
    }

};

const ordersService = new OrdersService();

export default ordersService;