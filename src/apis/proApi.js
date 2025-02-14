import axios from "axios";

export class ProductsService {

    async getProducts ({page, featured = true }) {
        console.log(page, featured)
        try {
           const response =  await axios.get('/api/pro/getall', {featured, page})
           return response.data;
        } catch (error) {
            throw error
        }
    }

};

const productsService = new ProductsService();

export default productsService;