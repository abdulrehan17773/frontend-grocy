import axios from "axios";

export class CatService {

    async getCategories () {
        try {
           const response =  await axios.get(`/api/cat/getall`)
           return response.data;
        } catch (error) {
            throw error
        }
    }

};

const catService = new CatService();

export default catService;