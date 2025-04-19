import axiosClient from "../api/axiosClinet";

interface User {
    username: string;
    email: string;
    password: string;
}

interface AuthResponse {
    access_token: string;  
    user: User;
}



const authService = {
    regiter: (username: string, email : string, password : string) : Promise<AuthResponse> => {
        return axiosClient.post("/register", { username, email, password });
    },
    login: (email: string, password: string): Promise<AuthResponse> => {
        return axiosClient.post('/auth/login', { email, password });
    },  
}

export default authService;