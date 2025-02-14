import axios from "axios";

export class AuthService {

    async register ({fullname, phone, email, password}) {
        try {
           const response =  await axios.post('/api/users/register', {fullname, phone, email, password})
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
          const response = await axios.post('/api/users/login', { email, password });
          return response.data; // Return data on success
        } catch (error) {
          throw error;
        }
    }

    async logout () {
        try {
           const response =  await axios.post('/api/users/logout')
           return response.data;
        }
        catch (error) {
            throw error
        }
    }

    async updateToken () {
        try {
            const response =  await axios.post('/api/users/refresh-token')
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async getUser () {
        try {
            const response =  await axios.post('/api/users/current-user')
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async verification ({email, otp}) {
        try {
            const response =  await axios.post('/api/users/verification', { email, otp})
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async resendOtp ({email}) {
        try {
            const response =  await axios.post('/api/users/resend-otp', { email })
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async updateName ({fullname}) {
        try {
            const response =  await axios.post('/api/users/update-name', { fullname })
           return response.data;
        } catch (error) {
            throw error
        }
    }
    
    async updatePhone ({phone}) {
        try {
            const response =  await axios.post('/api/users/update-phone', { phone })
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async updatePassword ({oldPassword, newPassword}) {
        try {
            const response =  await axios.post('/api/users/update-password', { oldPassword, newPassword })
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async updateAvatar ({avatar}) {
        try {
            const response =  await axios.post('/api/users/update-avatar', { avatar })
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async sendForget ({email}) {
        try {
            const response =  await axios.post('/api/users/send-forget', { email })
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async sendForget ({ email, otp }) {
        try {
            const response =  await axios.post(`/apiusers/forget/${email}/${otp}`)
           return response.data;
        } catch (error) {
            throw error
        }
    }

    async forgetPassword ({ email }) {
        try {
            const response =  await axios.post('/api/users/forget-password', { email })
           return response.data;
        } catch (error) {
            throw error
        }
    }
    
};

const authService = new AuthService();

export default authService;