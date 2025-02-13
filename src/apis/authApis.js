import axios from "axios";

export class AuthService {

    async login ({ email, password}) {
        try {
           const response =  await axios.post('/api/users/login', { email, password})
           return response.data;
        } catch (error) {
            throw error
        }
    }
};

const authService = new AuthService();

export default authService;