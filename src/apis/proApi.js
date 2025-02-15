import axios from "axios";

export class ProductsService {

    async getProducts () {
        try {
           const response =  await axios.get(`/api/order/getall`)
           return response.data;
        } catch (error) {
            throw error
        }
    }

};

const productsService = new ProductsService();

export default productsService;